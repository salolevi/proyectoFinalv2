import json
import re
from unicodedata import decimal
from django.http import HttpResponse, JsonResponse
from http.client import HTTPResponse
from re import L
from django.shortcuts import render, get_object_or_404
from django.views.generic import View, TemplateView
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from pytz import timezone
from .models import Profile, Game, Level, ProfileScore, ProfileScoreLogic
from .utils import remove_user_time
from datetime import datetime, timezone

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

class IndexView(View):
  template_name = "index.html"
  
  def get(self, *args, **kwargs):
    for _user in User.objects.all():
      remove_user_time(_user)
      
    return render(self.request, self.template_name)
  
class ErrorView(View):
  template_name = 'error.html'
  def get(self, request):
    return render(self.request, self.template_name)
  
class DislexiaGame(View):
  template_name = 'dislexia.html'
  def get(self, request):
    if not request.user.is_authenticated:
      messages.success(self.request, 'Porfavor, inicie sesion para jugar', extra_tags='error')
      return redirect('login')
    else:
      return render(self.request, self.template_name)

def LogicGame(request):
  if request.method == 'GET' and request.user.is_authenticated:
    template_name = 'logica.html'
    return render(request, template_name)
  else: 
    messages.success(request, 'Porfavor inicie sesion para jugar',
                     extra_tags='error')
    return redirect('login')
    
  
def get_data(request, gameID, levelID):
  if request.method == 'GET':
    _profile = Profile.objects.get(user=request.user)
    _game = get_object_or_404(Game, pk=gameID)
    _level = Level.objects.get(gameID = _game, level=levelID)
    scores = ProfileScore.objects.filter(profileID = _profile, gameID = _game, levelID = _level)
    max = scores[0].score
    for profileScore in scores:
      if profileScore.score > max:
        max = profileScore.score
    responseData = {}
    responseData['highscore'] = str(max)
    return HttpResponse(json.dumps(responseData))

def send_score(request):
  actualUser = User.objects.get(id = request.user.id)
  # actualUser = get_object_or_404(User, id = request.user.id)
  game = Game.objects.get(id = int(request.POST.get('game')))
  # game = get_object_or_404(Game, pk=int(request.POST.get('game')))
  score = int(request.POST.get('score'))
  _level = Level.objects.get(gameID = game, level = int(request.POST.get('level')))
  profile = get_object_or_404(Profile, user = actualUser)
  if request.method == 'POST':
    if int(request.POST.get('game')) == 1 or int(request.POST.get('game')) == 2:
      # level = get_object_or_404(Level, pk=int(request.POST.get('level')))
      
      # profile = Profile.objects.get(user = actualUser)
      try:
        profile_score = ProfileScore(profileID = profile, gameID = game, levelID = _level, score = score, scoreDate=datetime.now())
        profile_score.save()
        return HttpResponse("Puntuacion registrada correctamente",status=201)
      except:
        return HttpResponse("Error en el registro de la puntuacion", status=400)
    elif int(request.POST.get('game')) == 3 or int(request.POST.get('game')) == 4:
      try:
        avgTime = round(float(request.POST.get('avgTime')), 2)
        averageMovements = round(float(request.POST.get('avgMovements')), 2)
        profile_score = ProfileScoreLogic(profileID = profile, gameID = game, levelID = _level, score = score, avgScoreTime = avgTime, avgMomevemts=averageMovements, scoreDate=datetime.now())
        profile_score.save()
        return HttpResponse("Puntuacion registrada correctamente",status=201)
      except:
        return HttpResponse("Error en el registro de la puntuacion", status=400)

def getScores(request, gameID, levelID):
  if request.method == 'GET':
    if not request.user.is_authenticated:
      messages.success(request, 'Error de autorizacion', extra_tags='error')
      return redirect('login')
    actualUser = User.objects.get(id = request.user.id)
    _profile = Profile.objects.get(user = actualUser)
    _game = Game.objects.get(id = int(gameID))
    _level = Level.objects.get(gameID = _game, level = levelID)
    
    if int(gameID) == 1 or int(gameID) == 2: 
      profileScoresGame = ProfileScore.objects.filter(profileID = _profile, gameID = _game, levelID = _level)
      profileScoreNoUser = ProfileScore.objects.filter(gameID = _game, levelID = _level)
      dates = []
      scores = []
      scoresAll = []
      generalAvg = averageScore(profileScoreNoUser)
      for score in profileScoresGame:
        dates.append(str(datetime.date(score.scoreDate))[5:])
        scores.append(score.score)
        scoresAll.append(generalAvg)
      scoresAndDates = {
        'dates': dates,
        'scores': scores,
        'scoresAll' : scoresAll
      }
      return JsonResponse(scoresAndDates)
    elif int(gameID) == 3:
      profileScoresLogicGame = ProfileScoreLogic.objects.filter(profileID = _profile, gameID = _game, levelID = _level)
      dates = []
      times = []
      movements = []
      for score in profileScoresLogicGame:
        dates.append(str(datetime.date(score.scoreDate))[5:])
        times.append(score.avgScoreTime)
        movements.append(score.avgMomevemts)
      scoresAndTimes = {
        'dates': dates,
        'times': times,
        'movements': movements
      }
      return JsonResponse(scoresAndTimes)
    elif int(gameID) == 4:
      profileScoresLogicGame = ProfileScoreLogic.objects.filter(profileID = _profile, gameID = _game, levelID = _level)
      dates = []
      times = []
      for score in profileScoresLogicGame:
        dates.append(str(datetime.date(score.scoreDate))[5:])
        times.append(score.avgScoreTime)
      scoresAndTimes = {
        'dates': dates,
        'times': times,
      }
      return JsonResponse(scoresAndTimes)
    
def aboutDislexia (request):
  if request.method == 'GET':
    return render (request, 'about-dislexia.html')