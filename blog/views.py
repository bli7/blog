from django.shortcuts import render

# Create your views here.
def homepage(request):
    return render(request, 'blog/homepage.html', {})

def category (request):
    return render(request,'blog/category.html', {})

def electronic (request):
    return render(request,'blog/electronic.html', {})

def level (request):
    return render(request,'blog/level.html', {})

def level1_active(request):
    return render(request,'blog/level1_active.html', {})


def level2_active(request):
    return render(request,'blog/level2_active.html', {})

def level3_active (request):
    return render(request,'blog/level3_active.html', {})

def login(request):
    return render(request, 'blog/login.html', {})

def output (request):
    return render(request,'blog/output.html', {})

def profile (request):
    return render(request,'blog/profile.html', {})

def tutorials4 (request):
    return render(request,'blog/tutorials4.html', {})

def easytutorial(request):
    return render(request, 'blog/easytutorial.html', {})
