// RATE_DISTANCE.js

window.RATE_DISTANCE = {
  "tables": {
    "RATE_DISTANCE": {
      "columns": {
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RATE_DISTANCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "RATE_DISTANCE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DISTANCE_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "foreign_key": "RATE_DISTANCE_TYPE"
        },
        "IS_ESTIMATE_ALLOWED": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "SHORT_DIST_CUTOFF": {
          "type": "NUMBER()",
          "nullable": false
        },
        "SHORT_DIST_CUTOFF_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "SHORT_DIST_CUTOFF_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "SHORT_DIST_CUTOFF in base units. "
        },
        "SHORT_DIST_FACTOR": {
          "type": "NUMBER(5,3)",
          "nullable": false
        },
        "LONG_DIST_CUTOFF": {
          "type": "NUMBER()",
          "nullable": false
        },
        "LONG_DIST_CUTOFF_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "LONG_DIST_CUTOFF_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "LONG_DIST_CUTOFF in base units. "
        },
        "LONG_DIST_FACTOR": {
          "type": "NUMBER(5,3)",
          "nullable": false
        },
        "DISTANCE_EXTERNAL_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DISTANCE_EXTERNAL_ENGINE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
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
      "fk_tables": [
        "CR_PROJECT",
        "DISTANCE_BY_ADDRESSES",
        "DISTANCE_LOOKUP",
        "DRIVER",
        "DRIVER_TYPE",
        "ESG_ACTIVITY_RULE",
        "IM_MILEAGE",
        "RATE_OFFERING",
        "RO_LANE_SPECIAL_SERVICE",
        "SHIPMENT_STOP"
      ]
    }
  }
};
