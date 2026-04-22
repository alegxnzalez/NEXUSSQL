// INVOICE_EQUIPMENT_BOV.js

window.INVOICE_EQUIPMENT_BOV = {
  "tables": {
    "INVOICE_EQUIPMENT_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "INVOICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INVOICE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "INVOICE_SOURCE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "INVOICE_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INVOICE_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "SHIPPER_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "EQUIPMENT_PREFIX": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "ISO_EQUIPMENT_TYPE_IDENTIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "EQUIP_DESCRIPTION_CODE": {
          "type": "VARCHAR2(5)",
          "nullable": true
        },
        "EQUIPMENT_OWNER_IDENTIFIER": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "EQUIP_OWNERSHIP_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "EQUIP_LENGTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_WIDTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_TARE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_TARE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_TARE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_DUNNAGE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_DUNNAGE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_DUNNAGE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "EQUIP_WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "EQUIP_MIN_TEMPERATURE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_MIN_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_MIN_TEMPERATURE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_MAX_TEMPERATURE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_MAX_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_MAXIMUM_TEMPERATURE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_PERCENT_HUMIDITY_ALLOWED": {
          "type": "NUMBER(3)",
          "nullable": true
        },
        "EQUIP_VENT_SETTING_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "EQUIP_WEIGHT_ALLOWANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_WEIGHT_ALLOWANCE_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EQUIP_WEIGHT_ALLOWANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
