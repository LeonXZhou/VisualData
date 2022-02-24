from django.shortcuts import render
from django.http import JsonResponse
import json
from scipy.stats import linregress
import numpy as np
# Create your views here.


def test(request):
    print('iran')
    print(request.method)
    if request.method == 'POST':
        return JsonResponse({'bob': 'wooooooop'})
    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    return JsonResponse(data)


def linear(request):
    request_data = json.loads(request.body)

    if len(request_data['xVals']) == 0:
        return JsonResponse({'data':[]}) 
        
    xdata = []
    ydata = []

    for xVal in request_data['xVals']:
        xdata.append(float(xVal))
    for yVal in request_data['yVals']:
        ydata.append(float(yVal))

    slope, intercept, r, p, se = linregress(xdata, ydata)

    xRange = np.amax(xdata) - np.amin(xdata)
    xStart = np.amin(xdata) - xRange * .1
    xEnd = np.amax(xdata) + xRange * .1
    xSteps = int(xRange/0.1)
    
    xVals = np.linspace(xStart, xEnd, xSteps)
    yVals = xVals * slope + intercept

    lineData = []
    for i in range(len(xVals)):
        lineData.append({'x':xVals[i], 'y':yVals[i]})

    return JsonResponse({'data':lineData})
