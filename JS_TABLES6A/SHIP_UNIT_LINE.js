// SHIP_UNIT_LINE.js

window.SHIP_UNIT_LINE = {
  "tables": {
    "SHIP_UNIT_LINE": {
      "columns": {
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT",
          "info": "The GID for the ship unit associated with the order release. "
        },
        "SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(4)",
          "nullable": false,
          "key_value": true,
          "info": "The unique sequence within the ship unit to define the individual line items. "
        },
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "The order release line associated with this ship unit line content line items. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross weight of the item. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for gross weight column. "
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
          "info": "The unit of measure for the gross volume. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross volume in base units. "
        },
        "ITEM_PACKAGE_COUNT": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The number of packages in this order release ship unit line for one ship unit. Its ship unit may represent more than one same ship units. E.g., for 20 ship units that contains 4 cases of 24 cans of cocoa, each order release ship unit line row will have an item GID: cocoa, item count 4x24, item package specification: case-of-24-cans, item package count: 4. The ship unit count will be 20. "
        },
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_LINE",
          "info": "The order base line associated with this ship unit line content line items if the order release was built from the order base. "
        },
        "WEIGHT_PER_SHIP_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per shipping line count to handle shipping a multiple count. "
        },
        "WEIGHT_PER_SHIP_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight per unit of measure. "
        },
        "WEIGHT_PER_SHIP_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per in the base unit of measure. "
        },
        "VOLUME_PER_SHIP_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per shipping line count to handle shipping a multiple count. "
        },
        "VOLUME_PER_SHIP_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight per unit of measure. "
        },
        "VOLUME_PER_SHIP_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight per in the base unit of measure. "
        },
        "COUNT_PER_SHIP_UNIT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The count per ship unit. "
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
        "SECONDARY_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "An additional value for the secondary weight of the item. "
        },
        "SECONDARY_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The nit of measure for secondary weight column. "
        },
        "SECONDARY_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary weight in base units. "
        },
        "SECONDARY_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "As additional value for the secondary volume of the item. "
        },
        "SECONDARY_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the secondary volume. "
        },
        "SECONDARY_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary volume in base units. "
        },
        "NET_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The net weight of the item. "
        },
        "NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for net weight column. "
        },
        "NET_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The net weight in base units. "
        },
        "NET_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The net volume of the item. "
        },
        "NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the net volume. "
        },
        "NET_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The net volume in base units. "
        },
        "SECONDRY_NET_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "An additional value for the secondary net weight of the item. "
        },
        "SECONDRY_NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for secondary net weight column. "
        },
        "SECONDRY_NET_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary net weight in base units. "
        },
        "SECONDRY_NET_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "As additional value for the net secondary volume of the item. "
        },
        "SECONDRY_NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the net secondary volume. "
        },
        "SECONDRY_NET_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The secondary net volume in base units. "
        },
        "OB_LINE_RELEASE_INSTR_SEQ": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The release instruction identifier from the order base line if the ship unit line was constructed through the order base releasing logic. "
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
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The packaged item GID defining the line for the ship unit."
        }
      },
      "fk_tables": [
        "SHIP_UNIT_LINE_REFNUM",
        "SHIP_UNIT_LINE_REMARK",
        "S_SHIP_UNIT_LINE"
      ]
    }
  }
};
