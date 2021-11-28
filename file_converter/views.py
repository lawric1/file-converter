from django.http import HttpResponse
from django.shortcuts import render

def homepage(request):
    # return HttpResponse("homepage")
    file = request.POST.get('file')
    print(file)
    return render(request, 'homepage.html')