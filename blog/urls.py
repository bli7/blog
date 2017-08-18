from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.homepage, name='homepage'),
    url(r'homepage.html', views.homepage,name = 'homepage'),
    url(r'profile.html', views.profile, name='profile'),
    url(r'electronic.html', views.electronic, name = 'electronic'),
    url(r'level.html', views.level, name='level'),
    url(r'level1_active.html', views.level1_active, name='level1_active'),
    url(r'level2_active.html', views.level2_active, name='level2_active'),
    url(r'level3_active.html', views.level3_active, name='level3_active'),
    url(r'login.html', views.login, name='login'),
    url(r'output.html', views.output, name='output'),
    url(r'tutorials2.html', views.tutorials2, name='tutorials2'),
    url(r'tutorials3.html', views.tutorials3, name='tutorials3'),
    url(r'tutorials4.html', views.tutorials4, name='tutorials4'),
    url(r'category.html', views.category, name='category'),

]
