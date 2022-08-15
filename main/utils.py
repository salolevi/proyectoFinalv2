
from datetime import datetime, timedelta
from django.utils import timezone

def remove_user_time(_user):
    user = _user
    register_time = user.date_joined
    now = timezone.now()
    ten_minutes_later = (register_time + timedelta(hours=0.16))
    if ten_minutes_later < now:
        if user.is_active == False:
            user.delete()
            