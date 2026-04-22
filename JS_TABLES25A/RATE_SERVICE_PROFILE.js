// RATE_SERVICE_PROFILE.js

window.RATE_SERVICE_PROFILE = {
  "tables": {
    "RATE_SERVICE_PROFILE": {
      "columns": {
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RATE_SERVICE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
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
      "fk_tables": [
        "LEG",
        "OB_LEG_CONSTRAINT",
        "OB_ORDER_BASE",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT",
        "RATE_SERVICE_PROFILE_D"
      ]
    }
  }
};
