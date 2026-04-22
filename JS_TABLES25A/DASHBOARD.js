// DASHBOARD.js

window.DASHBOARD = {
  "tables": {
    "DASHBOARD": {
      "columns": {
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
        },
        "DASHBOARD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Uniquely identified name of the Dashboard. "
        },
        "DASHBOARD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Name of the Dashboard "
        },
        "DASHBOARD_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "C",
            "S"
          ],
          "info": "Type of Dashboard. STANDARD (S) / CUSTOM (C) "
        },
        "DASHBOARD_PATH": {
          "type": "VARCHAR2(200)",
          "nullable": false,
          "info": "Relative path of the Dashboard. Standard Dashboard have read-only path, Custom Dashboard path has to be given and is editable by the user "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description of the Dashboard "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "External Release ID"
        }
      },
      "fk_tables": []
    }
  }
};
