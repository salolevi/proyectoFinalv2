from email.policy import default
from django.db import models
from django.core.validators import int_list_validator
from django.contrib.auth.models import User
from datetime import datetime
from django.utils import timezone

# Create your models here.


class Profile(models.Model):
  user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
  profile_pic = models.ImageField(null=True, blank=True, upload_to="media/profilepics", default='profilepics/mushroom.png')
  bio = models.TextField(default="Usuario misterioso...")
  birthday = models.DateField(default=datetime.today)
  def __str__(self) -> str:
    return '{usern} Profile'.format(usern=self.user.username)

class Game(models.Model):
  problematica = models.TextField(max_length=25, default="Sin asignar")
  desc = models.TextField(max_length=250)
  def __str__(self) -> str:
    return 'Game {game} ({prob})'.format(game=self.id, prob=self.problematica)
  
class Level(models.Model):
  gameID = models.ForeignKey(Game, on_delete=models.CASCADE)
  level = models.IntegerField(default=-1)
  def __str__(self) -> str:
    return 'Game {game}: level {level}'.format(game=Game.objects.get(id = self.gameID.id).id, level=self.level)

class ProfileScore(models.Model):
  profileID = models.ForeignKey(Profile, on_delete=models.CASCADE)
  gameID = models.ForeignKey(Game, on_delete=models.CASCADE)
  levelID = models.ForeignKey(Level, on_delete=models.CASCADE)
  score = models.SmallIntegerField(default=0)
  scoreDate = models.DateTimeField(default=timezone.now())
  def __str__(self) -> str:
    return '{usern} Game {game}, Level {level}, Score = {score}'.format(usern=self.profileID.user.username,game=self.gameID.id, level=self.levelID.level,score=self.score)
  
class ProfileScoreLogic(models.Model):
  profileID = models.ForeignKey(Profile, on_delete=models.CASCADE)
  gameID = models.ForeignKey(Game, on_delete=models.CASCADE)
  levelID = models.ForeignKey(Level, on_delete=models.CASCADE)
  score = models.SmallIntegerField(default=0)
  scoreDate = models.DateTimeField(default=timezone.now())
  avgScoreTime = models.FloatField(default=0)
  avgMomevemts = models.FloatField(default=0)
  def __str__(self) -> str:
    return '{usern} Game {game}, Level {level}, Score = {score}'.format(usern=self.profileID.user.username,game=self.gameID.id, level=self.levelID.level,score=self.score)
  