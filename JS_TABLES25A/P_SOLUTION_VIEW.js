// P_SOLUTION_VIEW.js

window.P_SOLUTION_VIEW = {
  "tables": {
    "P_SOLUTION_VIEW": {
      "columns": {
        "P_SOLUTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "P_BID_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "PCT_AWARD": {
          "type": "NUMBER()",
          "nullable": true
        },
        "P_BID_ROUND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SOURCE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "DEST": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BID_SEQUENCE_NUM": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "TRANSPORT_MODE_GID": {
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
        "FLAT_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
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
        "VAR_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "NUM_VAR_COST_UNITS": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "MAX_PCT_LOADS_REQUESTED": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_PCT_LOADS_REQUESTED": {
          "type": "NUMBER()",
          "nullable": true
        },
        "P_BID_PACKAGE_GID": {
          "type": "VARCHAR2(101)",
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
          "type": "VARCHAR2(14)",
          "nullable": true
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "VARCHAR2(14)",
          "nullable": true
        },
        "PUBLISH_YN": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "REF_CARRIER": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "REF_BID": {
          "type": "NUMBER()",
          "nullable": true
        },
        "REF_BID_CURRENCY_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "REF_BID_BASE": {
          "type": "NUMBER()",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
