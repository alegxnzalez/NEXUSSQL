// SHIP_UNIT_SPEC.js

window.SHIP_UNIT_SPEC = {
  "tables": {
    "SHIP_UNIT_SPEC": {
      "columns": {
        "SHIP_UNIT_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SHIP_UNIT_SPEC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "SHIP_UNIT_SPEC_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "LENGTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "LENGTH in base units. "
        },
        "WIDTH": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "WIDTH in base units. "
        },
        "HEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "HEIGHT in base units. "
        },
        "TARE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TARE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TARE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "TARE_WEIGHT in base units. "
        },
        "EFFECTIVE_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EFFECTIVE_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "EFFECTIVE_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "EFFECTIVE_VOLUME in base units. "
        },
        "PACKAGING_FORM_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGING_FORM_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "MAX_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "MAX_WEIGHT in base units. "
        },
        "UNIT_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "P",
            "T",
            "B"
          ],
          "info": "Defines whether the ship_unit_spec is of type (P)ackaging Unit, (T)ransport Handling Unit, or (B). "
        },
        "IS_IN_ON_MAX": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "I",
            "O",
            "M"
          ]
        },
        "MAX_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CORE_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "For cylindrical objects, this defines the diameter of the core "
        },
        "CORE_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "For cylindrical objects, unit of measure for the diameter of the core "
        },
        "CORE_DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "For cylindrical objects, the base value of the diameter of the core "
        },
        "DIAMETER": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_CYLINDRICAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicate if the ship unit spec is cylindrial or not. "
        },
        "IS_NESTABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "To indicate if this item is nestable or not when doing volume estimation. "
        },
        "MAX_NESTING_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Max number of units nestable to reduce volume consumption. "
        },
        "NESTING_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The additional volume consumption from nesting a like unit. "
        },
        "NESTING_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "NESTING_VOLUME_BASE": {
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
        },
        "MAX_ON_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Max width of items can be placed on the ship unit spec when used as a THU. "
        },
        "MAX_ON_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_ON_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_ON_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Max length of items can be placed on the ship unit spec when used as a THU. "
        },
        "MAX_ON_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_ON_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MAX_ON_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Max height of items can be placed on the ship unit spec when used as a THU. "
        },
        "MAX_ON_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_ON_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PARCEL_PACKTYPE": {
          "type": "VARCHAR2(2)",
          "nullable": true
        },
        "PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "This column defines the priority associated with an Ship Unit Spec"
        }
      },
      "fk_tables": [
        "CLAIM_LINE_ITEM",
        "DM_TRANSACTION",
        "ESG_ACTIVITY",
        "ESG_ACTIVITY_DETAIL",
        "IE_S_SHIP_UNIT_LINE",
        "INVOICE_LINEITEM",
        "INVOICE_LI_COMMERCIAL_DATA",
        "INVOICE_SUMMARY",
        "INVOICE_SUMMARY_DETAIL",
        "LOAD_CNFG_3D_PATTERN_D",
        "LOAD_CONFIG_RULE",
        "LOCATION_THU_CAPACITY",
        "LOCATION_THU_PRU_CAPACITY",
        "NFRC_RULE",
        "OB_LINE",
        "OB_RELEASE_INSTRUCTION",
        "OB_SHIP_UNIT",
        "OB_SHIP_UNIT_CONTENT",
        "OB_SU_RELEASE_INSTRUCTION",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LINE",
        "PACKAGED_ITEM",
        "PI_PU_JOIN",
        "PRU_CAPACITY",
        "PRU_USAGE",
        "RELEASE_METHOD",
        "SHIPMENT_STOP_DEBRIEF",
        "SHIP_UNIT",
        "SHIP_UNIT_LINE",
        "SHIP_UNIT_SPEC_ACC",
        "SHIP_UNIT_SPEC_EQUIP_GRP_COMP",
        "SHIP_UNIT_SPEC_PROFILE_D",
        "SHIP_UNIT_SPEC_REFNUM",
        "SKU",
        "STACKING_COMPATIBILITY",
        "STOWAGE_MODE_PREF_RULE",
        "S_SHIP_UNIT",
        "S_SHIP_UNIT_LINE",
        "THU_EQUIP_REF_UNIT",
        "TI_HI"
      ]
    }
  }
};
