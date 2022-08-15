from django.contrib import admin
from .models import Profile, Game, Level, ProfileScore, ProfileScoreLogic

# Register your models here.
admin.site.register(Profile)
admin.site.register(Game)
admin.site.register(Level)
admin.site.register(ProfileScore)
admin.site.register(ProfileScoreLogic)