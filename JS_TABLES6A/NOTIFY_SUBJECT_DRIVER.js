// NOTIFY_SUBJECT_DRIVER.js

window.NOTIFY_SUBJECT_DRIVER = {
  "tables": {
    "NOTIFY_SUBJECT_DRIVER": {
      "columns": {
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "NOTIFY_SUBJECT"
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD"
        },
        "PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE"
        },
        "RECIPIENT_DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "CONSOLIDATED_NOTIFY_ONLY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "CONSOLIDATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_PROFILE"
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
        },
        "DRIVER_OPTION": {
          "type": "VARCHAR2(9)",
          "nullable": false,
          "values": [
            "PRIMARY",
            "SECONDARY",
            "TEAM"
          ],
          "info": "'Specifies if the recipient is the driver, secondary driver, or the driver team.'"
        }
      },
      "fk_tables": []
    }
  }
};
