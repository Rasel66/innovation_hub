from django.urls import path
from .views import *

urlpatterns = [
    path('', home_page_view, name='home_page'),
    path('about/', about_page_view, name='about_page'),
    path('courses/', courses_page_view, name='courses_page'),
    path('success-stories/', success_stories_page_view, name='success_stories_page'),
    path('blogs/', blogs_page_view, name='blogs_page'),
    path('blogs-details/', blogs_details_page_view, name='blogs_details_page'),
    path('courses-details/', courses_details_page_view, name='courses_details_page'),
]
