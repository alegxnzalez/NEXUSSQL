// OMR_D_LINE.js

window.OMR_D_LINE = {
  "tables": {
    "OMR_D_LINE": {
      "columns": {
        "OMR_D_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OMR_D"
        },
        "SEQUENCE_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true
        },
        "COUNT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "EARLY_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "LATE_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "TIME_SERIES_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "F",
            "H"
          ],
          "info": "'F': FORCAST; 'H':HISTORY"
        },
        "UNIT_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "UNIT_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "UNIT_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_LENGTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "UNIT_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_WIDTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "UNIT_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "UNIT_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNIT_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "UNIT_DIAMETER_BASE": {
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
        "OMR_D_LINE_REFNUM",
        "OMR_D_LINE_REMARK",
        "OMR_D_LINE_STATUS"
      ]
    }
  }
};
