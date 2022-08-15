from datetime import date, datetime, timedelta, timezone
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.views.generic import View, TemplateView
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserChangeForm
from main.models import Profile, Game, Level, ProfileScore, ProfileScoreLogic
from django.urls import reverse, reverse_lazy
from django.core.mail import EmailMessage
from django.conf import settings
import os
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_str, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from .utils import token_generator
import pdb;
# Create your views here.

def averageScore(set):
  average = 0
  if len(set) == 0:
    return 0
  for instance in set:
    average += instance.score
  return round(average/len(set), 2)

def averageTime(set):
  average = 0
  if len(set) == 0:
    return 0
  for instance in set:
    average += instance.avgScoreTime
  return round(average/len(set), 2)

def averageMovements(set):
  average = 0
  if len(set) == 0:
    return 0
  for instance in set:
    average += instance.avgMomevemts
  return round(average/len(set), 2)

class login_user(View):
  
  template_name = 'authenticate/login.html'
  def get(self, *args, **kwargs):  
    return render(self.request, self.template_name)
  
  def post(self, *args, **kwargs):
    username = self.request.POST['username']
    password = self.request.POST['user_password']
    user = authenticate(self.request, username=username, password=password)
    if user is not None:
        login(self.request, user)
        return redirect('main-index')
        # Redirect to a success page.   
    else:
      messages.success(self.request, ('El nombre de ususario o contrasena es incorrecto'))
      return redirect('login')
  
class CreateUser(View):
  template_name = 'authenticate/create-user.html'
  
  def get(self, *args, **kwargs):
    return render(self.request, self.template_name)
  
  def post(self, *args, **kwargs):
    user_name = self.request.POST.get('user_name')
    user_lastn = self.request.POST.get('user_lastn')
    username = self.request.POST.get('username')
    _email = self.request.POST.get('user_email')
    password = self.request.POST.get('user_password')
    birthday = self.request.POST.get('user_birthday')
    
    for user in User.objects.all():
      if username == user.username or _email == user.email:
        messages.success(self.request, ('Ya existe un usuario con ese identificador'), extra_tags='error')
        return redirect('createuser')
    else:
      new_user = User.objects.create_user(username, _email, password, first_name = user_name, last_name = user_lastn)
      profile = Profile(user=new_user, birthday=birthday, profile_pic='mushroom.png')
      new_user.is_active = False
      new_user.save()
      profile.save()
      domain = get_current_site(self.request).domain
      uidb64 = urlsafe_base64_encode(force_bytes(new_user.pk))
      link = reverse('activate', kwargs={'uidb64': uidb64, 'token':token_generator.make_token(new_user)})
      
      activate_url = 'http://'+domain+link
      
      email_body = 'Hola ' + new_user.username + "!\nPorfavor use este link para verificar su cuenta\n" +activate_url
      
      try:
        email = EmailMessage(
        'Confirma tu cuenta',
        email_body,
        to=[new_user.email]
        )
        email.send(fail_silently=False)
        
      except Exception as e:
        print(e)
      # new_user.first_name = user_name
      # new_user.last_name = user_lastn
      # new_user.username = username
      # new_user.email = email
      # new_user.password = password
      # new_user.save()
      
      return redirect('await', em=_email)
    
class AwaitVerification(View):
  def get(self, request, em):
    template_name = 'authenticate/await.html'
    context = {}
    context['email'] = em
    return render(request, template_name, context)
    
class VerificationView(View):
  def get(self, request, uidb64, token):
    try:
      id = force_str(urlsafe_base64_decode(uidb64))
      user = User.objects.get(pk=id)
      
      if not token_generator.check_token(user, token):
        return redirect('login' + '?message=' + 'Usario ya activo')
      
      if(user.is_active):
        return redirect('login')
      user.is_active = True
      user.save()
      profile = Profile.objects.get(user = user)
      for _game in Game.objects.all():
        for _level in Level.objects.filter(gameID = _game):
          profileHS = ProfileScore(profileID = profile, gameID = _game, levelID = _level)
          profileHS.save()
      
      messages.success(self.request, 'Cuenta creada exitosamente', extra_tags='safe')
      login(self.request, user)
      return redirect('confirmation')
    except Exception as e:
      messages.success(self.request, 'Hubo un problema al verificar su cuenta', extra_tags='error')
      return redirect('confirmation')
      pass
  
class ConfirmationView(View):
  def get(self, request):
    
    template_name ='authenticate/confirm_template.html'
    return render(request, template_name)
  

class logout_user(View):
  def get(self, *args, **kwargs):
    logout(self.request)
    return redirect('main-index')
  
class profile(View):
  
  def get(self, request, username):
    actualUser = User.objects.get(username = username)
    def age(birthdate):
      today = datetime.today()
      age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
      return age
    template_name = 'authenticate/profile.html'
    context = {}
    context['profile'] = Profile.objects.get(user=actualUser)
    context['age'] = age(context['profile'].birthday)
    
    return render(self.request, template_name, context)
  
class EditProfile(View):
  def get(self, request, username):
    def age(birthdate):
      today = datetime.today()
      age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
      return age
    context = {}
    profile = Profile.objects.get(user=self.request.user)
    context['profile'] = profile
    context['age'] = age(context['profile'].birthday)
    template_name = 'authenticate/edit_profile.html'
    return render(request, template_name, context)
  
  def post(self, request, username):
    try:
      user = User.objects.get(id = self.request.user.id)
      if user.username == username:
        user.username = self.request.POST.get('username')
        user.first_name = self.request.POST.get('user_name')
        user.last_name = self.request.POST.get('user_lastn')
        profile = Profile.objects.get(user=user)
        profile.bio = self.request.POST.get('user_bio')
        if (len(self.request.FILES)!=0):
          if(len(profile.profile_pic)>0):
            os.remove(profile.profile_pic.path)
            profile.profile_pic = self.request.FILES['user_profilepic']
        profile.birthday = self.request.POST.get('user_birthday')
        user.save()
        profile.save()
        messages.success(request, 'Perfil actualizado exitosamente', extra_tags='safe')
        return redirect('profile', user.username)
      else :
        messages.succes(request, 'No puede editar un perfil que no es suyo', extra_tags='error')
        return redirect('main-index')
    except Exception as e:
      messages.success(self.request, type(e)+e.args, extra_tags='error')
      return redirect('error')

def StatPage(request, username):
  if request.method == 'GET':
    template_name = 'stats.html'
    actualUser = User.objects.get(username = username)
    context = {}
    # Puntuaciones totales del jugador
    profileScores = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser))
    
    # Puntuaciones jugando al primer juego, sin importar niveles
    profileScoresGameOne = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 1))
    actualDate = datetime.now() + timedelta(days=1)
    lastWeek = actualDate - timedelta(days=8)
    #Puntuaciones totales del primer juego en la ultima semana
    profileScoresGameOneActualWeek = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 1), scoreDate__range=(datetime.date(lastWeek) ,datetime.date(actualDate)))
    #Puntuaciones primer juego, primer nivel
    profileScoresGameOneLevelOne = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 1), levelID = Level.objects.get(gameID = Game.objects.get(id = 1) ,level = 1))
    #Puntuaciones primer juego, segundo nivel
    profileScoresGameOneLevelTwo = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 1), levelID = Level.objects.get(gameID = Game.objects.get(id = 1),level = 2))
    #Puntuaciones primer juego, tercer nivel
    profileScoresGameOneLevelThree = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 1), levelID = Level.objects.get(gameID = Game.objects.get(id = 1),level = 3))
    
    # Puntuaciones jugando al segundo juego, sin importar niveles
    profileScoresGameTwo = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 2))
    profileScoresGameTwoActualWeek = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 2), scoreDate__range=(lastWeek ,actualDate))
    #Puntuaciones segundo juego, primer nivel
    profileScoresGameTwoLevelOne = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 2), levelID = Level.objects.get(gameID = Game.objects.get(id = 2), level = 1))
    #Puntuaciones segundo juego, segundo nivel
    profileScoresGameTwoLevelTwo = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 2), levelID = Level.objects.get(gameID = Game.objects.get(id = 2), level = 2))
    #Puntuaciones segundo juego, tercer nivel
    profileScoresGameTwoLevelThree = ProfileScore.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 2), levelID = Level.objects.get(gameID = Game.objects.get(id = 2), level = 3))
    
    #Puntuaciones jugando al tercer juego, sin importar niveles
    profileScoresGameThree = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 3))
    #Puntuaciones totales jugando al tercer juego en la ultima semana
    profileScoresGameThreeActualWeek = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 3), scoreDate__range = (lastWeek, actualDate))
    #Puntuaciones jugando al tercer juego, primer nivel
    profileScoresGameThreeLevelOne = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 3), levelID = Level.objects.get(gameID = Game.objects.get(id = 3), level = 1))
    #Puntuaciones jugando al tercer juego, segundo nivel
    profileScoresGameThreeLevelTwo = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 3), levelID = Level.objects.get(gameID = Game.objects.get(id = 3), level = 2))
    #Puntuaciones jugando al tercer juego, tercer nivel
    profileScoresGameThreeLevelThree = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 3), levelID = Level.objects.get(gameID = Game.objects.get(id = 3), level = 3))
    
    #Puntiaciones jugando al cuarto juego, sin importar niveles
    profileScoresGameFour = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 4))
    #Puntuaciones totales jugando al tercer juego en la ultima semana
    profileScoresGameFourActualWeek = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 4), scoreDate__range = (lastWeek, actualDate))
    #Puntuaciones jugando al tercer juego, primer nivel
    profileScoresGameFourLevelOne = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 4), levelID = Level.objects.get(gameID = Game.objects.get(id = 4), level = 1))
    #Puntuaciones jugando al tercer juego, segundo nivel
    profileScoresGameFourLevelTwo = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 4), levelID = Level.objects.get(gameID = Game.objects.get(id = 4), level = 2))
    #Puntuaciones jugando al tercer juego, tercer nivel
    profileScoresGameFourLevelThree = ProfileScoreLogic.objects.filter(profileID = Profile.objects.get(user=actualUser), gameID = Game.objects.get(id = 4), levelID = Level.objects.get(gameID = Game.objects.get(id = 4), level = 3))
    
    context['averageScore'] = averageScore(profileScores)
    context['averageScoreGameOne'] = averageScore(profileScoresGameOne)
    context['averageActualWeek1'] = averageScore(profileScoresGameOneActualWeek)
    context['averageScoreGameOneLevelOne'] = averageScore(profileScoresGameOneLevelOne)
    context['averageScoreGameOneLevelTwo'] = averageScore(profileScoresGameOneLevelTwo)
    context['averageScoreGameOneLevelThree'] = averageScore(profileScoresGameOneLevelThree)
    
    context['averageScoreGameTwo'] = averageScore(profileScoresGameTwo)
    context['averageActualWeek2'] = averageScore(profileScoresGameTwoActualWeek)
    context['averageScoreGameTwoLevelOne'] = averageScore(profileScoresGameTwoLevelOne)
    context['averageScoreGameTwoLevelTwo'] = averageScore(profileScoresGameTwoLevelTwo)
    context['averageScoreGameTwoLevelThree'] = averageScore(profileScoresGameTwoLevelThree)
    
    context['averageTimeGameThree'] = averageTime(profileScoresGameThree)
    context['averageMovementsGameThree'] = averageMovements(profileScoresGameThree)
    context['averageTimeGameThreeActualWeek'] = averageTime(profileScoresGameThreeActualWeek)
    context['averageMovementsGameThreeActualWeek'] = averageMovements(profileScoresGameThreeActualWeek)
    context['averageTimeGameThreeLevelOne'] = averageTime(profileScoresGameThreeLevelOne)
    context['averageMovementsGameThreeLevelOne'] = averageMovements(profileScoresGameThreeLevelOne)
    context['averageTimeGameThreeLevelTwo'] = averageTime(profileScoresGameThreeLevelTwo)
    context['averageMovementsGameThreeLevelTwo'] = averageMovements(profileScoresGameThreeLevelTwo)
    context['averageTimeGameThreeLevelThree'] = averageTime(profileScoresGameThreeLevelThree)
    context['averageMovementsGameThreeLevelThree'] = averageMovements(profileScoresGameThreeLevelThree)
    
    context['averageTimeGameFour'] = averageTime(profileScoresGameFour)
    context['averageTimeGameFourActualWeek'] = averageTime(profileScoresGameFourActualWeek)
    context['averageTimeGameFourLevelOne'] = averageTime(profileScoresGameFourLevelOne)
    context['averageTimeGameFourLevelTwo'] = averageTime(profileScoresGameFourLevelTwo)
    context['averageTimeGameFourLevelThree'] = averageTime(profileScoresGameFourLevelThree)
    
    
    return render(request, template_name, context)