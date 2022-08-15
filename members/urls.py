from django.urls import path
from . import views
from django_email_verification import urls as mail_urls

urlpatterns = [
    path('log-in', views.login_user.as_view(), name='login'),
    path('create-user', views.CreateUser.as_view(), name='createuser'),
    path('logout', views.logout_user.as_view(), name='logout'),
    path('profile/<str:username>', views.profile.as_view(), name='profile'),
    # path('email/', include(mail_urls))
    path('activate/<uidb64>/<token>', views.VerificationView.as_view(), name='activate'),
    path('await/<str:em>', views.AwaitVerification.as_view(), name='await'),
    path('confirmation', views.ConfirmationView.as_view(), name='confirmation'),
    path('edit-profile/<str:username>', views.EditProfile.as_view(), name='edit'),
    path('stats/<str:username>', views.StatPage, name='stats')
]
