// NOTIFY_SUBJECT_CONTACT.js

window.NOTIFY_SUBJECT_CONTACT = {
  "tables": {
    "NOTIFY_SUBJECT_CONTACT": {
      "columns": {
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "NOTIFY_SUBJECT",
          "info": "The GID for the notify subject. "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The GID for the contact. "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "The GID for the communication method. "
        },
        "PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true,
          "info": "Parameters related to notify subject. "
        },
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE",
          "info": "The GID for the stylesheet profile. "
        },
        "RECIPIENT_DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Domain name of recipient. "
        },
        "AS_INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The GID for the involved party qualifier related to the registration. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "CONSOLIDATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_PROFILE",
          "info": "The GID for the consolidation profile. Enter a Consolidation Profile if you are using consolidated notification. If a consolidation profile is entered, it will apply to all contact notifications that do not have a consolidated notification profile. "
        },
        "CONSOLIDATED_NOTIFY_ONLY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Select the Consolidated Notify Only check box if the only notification sent is to be consolidated and the communication method is email, fax or message center. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "Database domain where this data is stored. "
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
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
