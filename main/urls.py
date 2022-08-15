from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='main-index'),
    path('error', views.ErrorView.as_view(), name='error'),
    path('dislexia', views.DislexiaGame.as_view(), name='dislexia'),
    path('get-data/<gameID>/<levelID>', views.get_data),
    path('send-score', views.send_score, name='send-score'),
    path('get-scores/<gameID>/<levelID>', views.getScores, name='get-scores'),
    path('about-dislexia', views.aboutDislexia, name='about-dislexia'),
    path('logica', views.LogicGame, name='logic')
]