// P_CARRIER_RESPONSE.js

window.P_CARRIER_RESPONSE = {
  "tables": {
    "P_CARRIER_RESPONSE": {
      "columns": {
        "TRANSACTION_CODE": {
          "type": "CHAR(2)",
          "nullable": true
        },
        "X_LANE_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "TRANSPORT_MODE_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "EQUIPMENT_GROUP_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SERVPROV_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "TRANSIT_TIME": {
          "type": "NUMBER()",
          "nullable": false
        },
        "FLAT_COST": {
          "type": "NUMBER()",
          "nullable": false
        },
        "FLAT_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "VAR_COST": {
          "type": "NUMBER()",
          "nullable": false
        },
        "VAR_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "COMPUTED_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "COMPUTED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "COMPUTED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "MIN_PCT_LOADS_REQUESTED": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_PCT_LOADS_REQUESTED": {
          "type": "NUMBER()",
          "nullable": true
        },
        "P_BID_PACKAGE_XID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "P_BID_ROUND_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "BID_SEQUENCE_NUM": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "CURRENCY_XID": {
          "type": "CHAR(3)",
          "nullable": true
        },
        "NUM_VAR_COST_UNITS": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "UOM_VAR_COST": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SOURCE_DESC": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "DEST_DESC": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SOURCE_ARB_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEST_ARB_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SOURCE_ARB_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SOURCE_ARB_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SOURCE_ARB_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEST_ARB_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEST_ARB_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEST_ARB_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SOURCE_SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SOURCE_DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEST_SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEST_DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "MIN_COUNT_LOADS_REQUESTED": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_COUNT_LOADS_REQUESTED": {
          "type": "NUMBER()",
          "nullable": true
        },
        "P_BID_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
