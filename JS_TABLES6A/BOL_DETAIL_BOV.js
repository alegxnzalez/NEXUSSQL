// BOL_DETAIL_BOV.js

window.BOL_DETAIL_BOV = {
  "tables": {
    "BOL_DETAIL_BOV": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "BOL_SUFFIX": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "ACTIVITY": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SHIP_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "UNIT_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UW_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "UNIT_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UV_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "SHIP_UNIT_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIP_UNIT_INITIAL_NUMBER": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIP_UNIT_SEAL": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "NO_OF_PKGS": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "TYPE_OF_PKGS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "HM": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "ITEM_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "W_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "COMM_CODE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "STCC_CODE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "NMFC_ARTICLE_CODE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
