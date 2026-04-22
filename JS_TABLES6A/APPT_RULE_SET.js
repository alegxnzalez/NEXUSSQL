// APPT_RULE_SET.js

window.APPT_RULE_SET = {
  "tables": {
    "APPT_RULE_SET": {
      "columns": {
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
        "APPT_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier. "
        },
        "APPT_RULE_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The ID of the Appointment Rule Set. "
        },
        "APPT_RULE_SET_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Name of rule set. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective date of rule set. "
        },
        "EXPIRY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiration date of rule set. "
        },
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "The flex commodity profile ID that associates to the rule set. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The equipment group profile ID that associates to the rule set. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "The mode profile ID that associates to the appointment rule set. "
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The service provider profile ID that associates to the rule set. "
        },
        "CONTACT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT_PROFILE",
          "info": "The contact profile ID that associates to the rule set. "
        },
        "FLEX_COMMODITY_CHECK_OPTION": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Flex Commodify check option, such as CHECK ALL, CHECK BY LARGEST WEIGHT and CHECK BY LARGEST VOLUME. "
        },
        "IS_TEMPERATURE_CONTROL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If the status (selected or unselected) of Temperature Control in the appointment rule set matches with the status of Temperature Control of the shipment, then the shipment is compatible. "
        },
        "IS_HAZARDOUS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If the status (selected or unselected) of Hazardous Allowed in the appointment rule set matches with the status of Hazardous Allowed of the shipment, then the shipment is compatible. "
        },
        "SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The source region ID that associates to the rule set. "
        },
        "DESTINATION_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The destination region ID that associates to the rule set. "
        },
        "APPT_SS_ACTIVITY_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APPT_SS_ACTIVITY_PROF",
          "info": "The appointment shipment shot activity profile ID that associates to the rule set. "
        },
        "APPOINTMENT_ACTIVITY_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The appointment activity type."
        }
      },
      "fk_tables": [
        "APPT_RULE_SET_FLEX_FIELD_D",
        "APPT_RULE_SET_REFNUM_D",
        "LRG_APPT_RULE_SET_JOIN",
        "LR_APPT_RULE_SET_JOIN"
      ]
    }
  }
};
