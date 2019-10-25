from rest_framework import serializers
from database.models import *

#Address Serializer

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

#PersonSerializer

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

#ConfigSerializer

class ConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Config
        fields = '__all__'

#Potency

class PotencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Potency
        fields = '__all__'

#DeviceSerializer

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = '__all__'

#MonitorsSerializer

class MonitorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monitors
        fields = '__all__'

