from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from rest_framework.authtoken import views

from .views import (
    PotencyList,
    PotencyDetail,
    DeviceList,
    DeviceDetail,
    DevicePotency,
    DevicePotencyYear,
    DevicePotencyMonth,
    DevicePotencyDay,
    UserList,
    UserDetail,
    UserDevice,
    PersonList,
    PersonDetail,
    AddressList,
    AddressDetail,
    ConfigList,
    ConfigDetail,
    AccountList,
    MonthList,
    MonthDetail,
    YearList,
    YearDetail,
    ObtainMultiAuthToken,
    ObtainExpiringAuthToken,
    DayList,
    DayDetail,
    send_push,
)

urlpatterns = [
    path('api/auth-iot/', ObtainMultiAuthToken.as_view()),
    path('api/auth/', ObtainExpiringAuthToken.as_view()),
    path('api/Potency/', PotencyList.as_view()),
    path('api/Potency/<int:pk>/', PotencyDetail.as_view()),
    path('api/Device/', DeviceList.as_view()),
    path('api/Device/<int:pk>/', DeviceDetail.as_view()),
    path('api/Device/<int:pk>/Potency', DevicePotency.as_view()),
    path('api/Device/<int:pk>/PotencyYear/<int:pk2>', DevicePotencyYear.as_view()),
    path('api/Device/<int:pk>/PotencyMonth/<int:pk3>/<int:pk2>', DevicePotencyMonth.as_view()),
    path('api/Device/<int:pk>/PotencyDay/<int:pk4>/<int:pk3>/<int:pk2>', DevicePotencyDay.as_view()),
    path('api/Person/', PersonList.as_view()),
    path('api/Person/<int:pk>/', PersonDetail.as_view()),
    path('api/Address/', AddressList.as_view()),
    path('api/Address/<int:pk>/', AddressDetail.as_view()),
    path('api/Config/', ConfigList.as_view()),
    path('api/Config/<int:pk>/', ConfigDetail.as_view()),
    path('api/Month/', MonthList.as_view()),
    path('api/Month/<int:pk>/', MonthDetail.as_view()),
    path('api/Year/', YearList.as_view()),
    path('api/Year/<int:pk>/', YearDetail.as_view()),
    path('api/Day/', DayList.as_view()),
    path('api/Day/<int:pk>/', DayDetail.as_view()),
    path('api/Account/', AccountList.as_view()),
    path('api/User', UserList.as_view()),
    path('api/User/<int:pk>/', UserDetail.as_view()),
    path('api/User/<int:pk>/Device', UserDevice.as_view()),
    path('api/send_push/', send_push)
]
