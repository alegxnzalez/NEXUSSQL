// RATE_ZONE_SERVICE_TIME.js

window.RATE_ZONE_SERVICE_TIME = {
  "tables": {
    "RATE_ZONE_SERVICE_TIME": {
      "columns": {
        "RATE_ZONE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_ZONE_PROFILE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_SERVICE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SERVICE_TIME_VALUE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SERVICE_TIME_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "SERVICE_TIME_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "SERVICE_TIME_VALUE in base units."
        },
        "SERVICE_DAYS": {
          "type": "NUMBER()",
          "nullable": true
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
