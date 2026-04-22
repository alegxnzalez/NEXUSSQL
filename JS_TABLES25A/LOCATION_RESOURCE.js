// LOCATION_RESOURCE.js

window.LOCATION_RESOURCE = {
  "tables": {
    "LOCATION_RESOURCE": {
      "columns": {
        "LOCATION_RESOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The location resource GID. "
        },
        "LOCATION_RESOURCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of the location resource. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_RESOURCE_TYPE",
          "info": "Location GID of the resource. "
        },
        "RESOURCE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_RESOURCE_TYPE",
          "info": "Resource Type GID of the resource. "
        },
        "LOCATION_RESOURCE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The name of the resource. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The description of the resource. "
        },
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "The calendar GID that will be applied to the resource. "
        },
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "The flex commodity profile ID that associates to the location resource. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The equipment group profile ID that associates to the location resource. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "The mode profile ID that associates to the location resource. "
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The service provider profile ID that associates to the location resource. "
        },
        "CONTACT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT_PROFILE",
          "info": "The contact profile GID. "
        },
        "FLEX_COMMODITY_CHECK_OPTION": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Flex Commodify check option, such as CHECK ALL, CHECK BY LARGEST WEIGHT and CHECK BY LARGEST VOLUME. "
        },
        "APPOINTMENT_ACTIVITY_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specify if the trailer that is scheduled for the appointment is attached to the truck by selecting Live from the Appointment Activity Type field. If the trailer is being dropped off, select Drop. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "PREFERENCE_LEVEL": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Gets the preference level of resource for Appointment scheduling "
        },
        "LOCATION_RESOURCE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_RESOURCE_GROUP",
          "info": "The XID for the location resource group. A location resource group allows you to group location resources such as dock door1, dock door2, and dock door3 into a location resource group such as frozen goods into a group called frozen. Similarly, you can group location resources into a location resource group such as dry goods into a group called dry. While you create a location resource group, you can also assign locations. For each location, you can assign multiple appointment rule sets. These rules sets are applicable to all the resources which are under the location resource group. A location resource group enables you to avoid duplicate configurations for each resource."
        }
      },
      "fk_tables": [
        "APPOINTMENT",
        "LOCATION_SERVPROV_PREF_D",
        "LR_APPT_RULE_SET_JOIN"
      ]
    }
  }
};
