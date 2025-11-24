from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.

def home_page_view(request):
    return render(request, 'pages/home.html')

def about_page_view(request):
    return render(request, 'pages/about.html')

def courses_page_view(request):
    return render(request, 'pages/courses.html')

def success_stories_page_view(request):
    return render(request, 'pages/success-stories.html')

def blogs_page_view(request):
    return render(request, 'pages/blogs.html')

def blogs_details_page_view(request):
    return render(request, 'pages/blog-details.html')

def courses_details_page_view(request):
    return render(request, 'pages/courses-details.html')