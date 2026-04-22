// CURVE_HEIGHT.js

window.CURVE_HEIGHT = {
  "tables": {
    "CURVE_HEIGHT": {
      "columns": {
        "CURVE_HEIGHT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CURVE_HEIGHT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CURVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ROOF_CURVATURE",
          "info": "Tag used to group the curve heights into a curve step function. "
        },
        "DISTANCE_BREAK": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Distance from the center projection of a curved roof. "
        },
        "DISTANCE_BREAK_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "DISTANCE_BREAK_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "HEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Height of the curve roof."
        },
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "HEIGHT_BASE": {
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
