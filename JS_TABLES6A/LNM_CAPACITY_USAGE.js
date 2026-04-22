// LNM_CAPACITY_USAGE.js

window.LNM_CAPACITY_USAGE = {
  "tables": {
    "LNM_CAPACITY_USAGE": {
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
        "CAPACITY_USAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CAPACITY_LIMIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "LIMIT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "USAGE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "IS_OVERRIDE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "CAPACITY_LIMIT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CAPACITY_USAGE_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
