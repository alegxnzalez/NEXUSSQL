// OB_SHIP_UNIT_CONTENT.js

window.OB_SHIP_UNIT_CONTENT = {
  "tables": {
    "OB_SHIP_UNIT_CONTENT": {
      "columns": {
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SHIP_UNIT",
          "info": "The GID for the ship unit associated with the order base. "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The unique sequence within the ship unit to define the individual line items. "
        },
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The packaged item GID defining the content line for the ship unit. "
        },
        "INITIAL_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "The initial packaged item GID, this value can be used to handle the original packaged item order and the substituted and item to be processed in the packaged item GID field. "
        },
        "TAG1": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Additional information about the item. Like the color, size, code. "
        },
        "TAG2": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Additional information about the item. Like the color, size, code. "
        },
        "TAG3": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Additional information about the item. Like the color, size, code. "
        },
        "TAG4": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Additional information about the item. Like the color, size, code. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross weight of the item. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for gross weight column. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross weight in base units. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross volume of the item. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the gross volume. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross volume in base units. "
        },
        "DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The declared value, commercial value of the ship unit line contents for sale of goods. "
        },
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The declared value in the base currency. "
        },
        "DECLARED_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The declared value currency identifier. "
        },
        "PACKAGED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of packages in this order release ship unit line for one ship unit. Its ship unit may represent more than one same ship units. E.g., for 20 ship units that contains 4 cases of 24 cans of cocoa, each order release ship unit line row will have an item GID: cocoa, item count 4x24, item package specification: case-of-24-cans, item package count: 4. The ship unit count will be 20. "
        },
        "WEIGHT_PER_SHIP_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per ship unit order base content line to handle shipping a multiple count number of ship units. "
        },
        "WEIGHT_PER_SHIP_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight per ship unit unit of measure. "
        },
        "WEIGHT_PER_SHIP_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per ship unit in the base unit of measure. "
        },
        "COUNT_PER_SHIP_UNIT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The packaged item count per ship unit order base content line count to handle shipping a multiple count number of ship units. "
        },
        "VOLUME_PER_SHIP_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume per order base content line to handle shipping a multiple count number of ship units. "
        },
        "VOLUME_PER_SHIP_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The volume per ship unit unit of measure. "
        },
        "VOLUME_PER_SHIP_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume per ship unit in the base unit of measure. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The packaging unit identifier for any inner packaging associated to the ship unit such as carton configuration. "
        },
        "PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The packaging unit count for the inner pack. "
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
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "OB_SU_CONTENT_ATTRIBUTE",
        "OB_SU_CONTENT_INV_PARTY",
        "OB_SU_CONTENT_REFNUM",
        "OB_SU_CONTENT_REMARK"
      ]
    }
  }
};
