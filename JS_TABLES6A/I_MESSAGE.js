// I_MESSAGE.js

window.I_MESSAGE = {
  "tables": {
    "I_MESSAGE": {
      "columns": {
        "I_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "I_MESSAGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "MESSAGE_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "IS_INBOUND": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "PRIORITY": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "SENDER_MESSAGE_ID": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "REFERENCE_MESSAGE_ID": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": false
        },
        "DEVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DEVICE"
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT"
        },
        "MESSAGE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MESSAGE_PROFILE"
        },
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE"
        },
        "MESSAGE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MESSAGE_TYPE"
        },
        "LATITUDE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LONGITUDE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DRIVER"
        },
        "POWER_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "POWER_UNIT"
        },
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT"
        },
        "MESSAGE_TITLE": {
          "type": "VARCHAR2(300)",
          "nullable": true
        },
        "EXTERNAL_DEVICE_ID": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "CELL_PHONE": {
          "type": "VARCHAR2(80)",
          "nullable": true
        },
        "EMAIL_ADDRESS": {
          "type": "VARCHAR2(60)",
          "nullable": true
        },
        "PROCESSING_ERROR_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIAG_PROCESS_FAILURE_REASON"
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
