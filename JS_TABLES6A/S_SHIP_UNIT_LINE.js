// S_SHIP_UNIT_LINE.js

window.S_SHIP_UNIT_LINE = {
  "tables": {
    "S_SHIP_UNIT_LINE": {
      "columns": {
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT",
          "info": "The GID for the ship unit associated with the shipment. "
        },
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "The unique sequence within the ship unit to define the individual line items. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight of the item. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for weight column. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight in base units. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume of the item. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the volume. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume in base units. "
        },
        "TRACKING_TAG1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. This could be any tracking numbers, SKU codes, SPLC codes etc. "
        },
        "TRACKING_TAG2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. This could be any tracking numbers, SKU codes, SPLC codes etc. "
        },
        "TRACKING_TAG3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. This could be any tracking numbers, SKU codes, SPLC codes etc. "
        },
        "TRACKING_TAG4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. This could be any tracking numbers, SKU codes, SPLC codes etc. "
        },
        "OR_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "A unique identifier to define the multiple order release lines per order release. The GID has the domain portion. "
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "A unique identifier created by the system for the order release. The GID contains the domain portion. "
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The GID for the order base that is related to the shipment line. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the packaging unit that is related to the shipment line. "
        },
        "PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The packaging unit count for the packaged unit that is being shipped. "
        },
        "ITEM_PACKAGE_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of packages in this shipment ship unit line for one ship unit. Its shipment ship unit may represent more than one same ship units. E.g., for 20 ship units that contains 4 cases of 24 cans of cocoa, each shipment ship unit line row will have an item GID: cocoa, item count 4x24, item package specification: case-of-24-cans, item package count: 4. The ship unit count will be 20. "
        },
        "DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The declared value of the packaged item quantity being shipped. "
        },
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The declared value in the base currency. "
        },
        "DECLARED_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency identifier for the declared value. "
        },
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The GID for the packaged item. "
        },
        "HAZMAT_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_ITEM",
          "info": "The GID for the hazmat item. "
        },
        "RECEIVED_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received weight of the shipment line. It can be entered as a stop debrief. Used for reporting purposes. "
        },
        "RECEIVED_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The received weight unit of measure. "
        },
        "RECEIVED_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received weight in the base unit of measure. "
        },
        "RECEIVED_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received volume of the shipment line. It can be entered as a stop debrief. Used for reporting purposes. "
        },
        "RECEIVED_VOLUME_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The received volume unit of measure. "
        },
        "RECEIVED_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received volume in the base unit of measure. "
        },
        "RECEIVED_ITEM_PACKAGE_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The received item package count. It can be entered as a stop debrief. "
        },
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_LINE",
          "info": "The GID for the ship unit that contains this shipping line. "
        },
        "SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(4)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_LINE",
          "info": "The ship unit line number defined for this shipping line. "
        },
        "WEIGHT_PER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per shipping line count to handle shipping a multiple count. "
        },
        "WEIGHT_PER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight per unit of measure. "
        },
        "WEIGHT_PER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per in the base unit of measure. "
        },
        "VOLUME_PER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per shipping line count to handle shipping a multiple count. "
        },
        "VOLUME_PER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight per unit of measure. "
        },
        "VOLUME_PER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per in the base unit of measure. "
        },
        "COUNT_PER_SHIP_UNIT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The count per ship unit. "
        },
        "RECEIVED_PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The received packaging unit count of the shipment line. It can be entered as stop debrief. Used for reporting purposes. "
        },
        "RECEIVED_COUNT_PER_SHIP_UNIT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The received count per ship unit. It can be entered as stop debrief. Used for reporting purposes. "
        },
        "T_ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used as a non-foreign key reference to the order release. "
        },
        "T_OR_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used as a non-foreign key reference to the order release line. "
        },
        "T_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Used as a non-foreign key reference to the order release ship unit line. "
        },
        "T_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(4)",
          "nullable": true,
          "info": "Used as a non-foreign key reference to the order release ship unit line. "
        },
        "USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_DEFINED_COMMODITY",
          "info": "The user defined commodity identifier associated with the item that is being shipped. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Stores a user-defined icon that will appear within the user interface to help visually identify attributes for the ship unit line. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Stores a user-defined icon that will appear within the user interface to help visually identify attributes for the ship unit line. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Stores a user-defined icon that will appear within the user interface to help visually identify attributes for the ship unit line. "
        },
        "MARINE_POLLUTANT_INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "A Y/N indicator if the shipment line item is a marine pollutant. "
        },
        "HOT_INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "A Y/N indicator if the shipment line item is hot."
        }
      },
      "fk_tables": [
        "DVE_CALCULATION_LINE",
        "LD_SCREENING_LINE",
        "SHIPMENT_REQDOC_TEXT",
        "SHIPMENT_STOP_DEBRIEF",
        "SS_S_SHIP_UNIT_LINE",
        "S_SHIP_UNIT_LINE_REFNUM",
        "S_SHIP_UNIT_LINE_REMARK",
        "S_SHIP_UNIT_LINE_STATUS"
      ]
    }
  }
};
