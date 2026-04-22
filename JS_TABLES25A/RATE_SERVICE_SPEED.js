// RATE_SERVICE_SPEED.js

window.RATE_SERVICE_SPEED = {
  "tables": {
    "RATE_SERVICE_SPEED": {
      "columns": {
        "RATE_SERVICE_SPEED_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RATE_SERVICE_SPEED_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_SERVICE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "DISTANCE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "DISTANCE in base units. "
        },
        "SPEED": {
          "type": "NUMBER()",
          "nullable": false
        },
        "SPEED_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "SPEED_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "SPEED in base units. "
        },
        "MIN_DRIVE_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_DRIVE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_DRIVE_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "MIN_DRIVE_TIME in base units."
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
