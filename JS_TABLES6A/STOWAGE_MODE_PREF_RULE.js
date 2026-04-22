// STOWAGE_MODE_PREF_RULE.js

window.STOWAGE_MODE_PREF_RULE = {
  "tables": {
    "STOWAGE_MODE_PREF_RULE": {
      "columns": {
        "STOWAGE_MODE_PREF_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "STOWAGE_MODE_PREF_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COMMODITY"
        },
        "TRANSPORT_HDL_UNIT_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIP_UNIT_SPEC"
        },
        "MIN_UNIT_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_UNIT_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_UNIT_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_UNIT_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_UNIT_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_LENGTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_UNIT_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_LENGTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_UNIT_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_WIDTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_UNIT_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_WIDTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_UNIT_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_UNIT_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_UNIT_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_UNIT_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_UNIT_DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_UNIT_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_UNIT_DIAMETER_BASE": {
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
      "fk_tables": [
        "STOWAGE_MODE_PREFERENCE"
      ]
    }
  }
};
