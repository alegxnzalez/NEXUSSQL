// OB_SU_RELEASE_INSTRUCTION.js

window.OB_SU_RELEASE_INSTRUCTION = {
  "tables": {
    "OB_SU_RELEASE_INSTRUCTION": {
      "columns": {
        "OB_SU_RELEASE_INSTR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the Release Instruction associated to the order base ship unit. "
        },
        "OB_SU_RELEASE_INSTR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the release instruction. "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The sequence number (key) associated with the release instruction. "
        },
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_SHIP_UNIT",
          "info": "The GID for the order base ship unit associated to the order base, null if the order base in line based. "
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The order base GID for the release instruction. "
        },
        "SHIP_UNIT_RELEASE_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The ship unit release count specifying the amount to be processed with this release instruction. "
        },
        "IS_PROCESSED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying that the release instruction was processed to create an order release ship unit. "
        },
        "RELEASE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the release instruction should be processed. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The source location GID for the pickup of the order base ship unit. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The destination location GID for the delivery of the order base ship unit. "
        },
        "EARLY_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The earliest date when the item can be picked up. If a value is specified here it overrides that one defined on the order base line. "
        },
        "LATE_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest date when the item can be picked up. If a value is specified here it overrides that one defined on the order base line. "
        },
        "EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The earliest date when the item can be delivered. If a value is specified here it overrides that one defined on the order base line. "
        },
        "LATE_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest date when the item can be picked delivered. If a value is specified here it overrides that one defined on the order base line. "
        },
        "FLAGGED_FOR_DELETE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying that the release instruction can be deleted by an agent or user defined process. "
        },
        "ITEM_PACKAGE_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The number of packaged items on this ship unit release instruction. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight for the release instruction. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight unit of measure. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight in the base unit of measure. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume for the release instruction. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The volume unit of measure. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume in the base unit of measure. "
        },
        "LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the ship unit for the release instruction. "
        },
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The length of the ship unit unit of measure. "
        },
        "LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the ship unit in the base unit of measure. "
        },
        "WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the ship unit for the release instruction. "
        },
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The width of the ship unit unit of measure. "
        },
        "WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the ship unit in the base unit of measure. "
        },
        "HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the ship unit for the release instruction. "
        },
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The height of the ship unit unit of measure. "
        },
        "HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the ship unit in the base unit of measure. "
        },
        "TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight of the ship units for this release instruction. "
        },
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total weight in the base unit of measure. "
        },
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weight in the base unit of measure. "
        },
        "TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume of the ship units for this release instruction. "
        },
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The total volume in the base unit of measure. "
        },
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume in the base unit of measure. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit GID to be applied to the order release ship unit created with this release instruction. "
        },
        "IS_AUTO_RELEASE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator to create the order release ship unit from the release instruction that comes in with the order base ship unit initially. "
        },
        "TAG1": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or code number. "
        },
        "TAG2": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or code number. "
        },
        "TAG3": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or code number. "
        },
        "TAG4": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or code number. "
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
        "SHIP_WITH_GROUP": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The ship with group value that will be used when creating the order release from this release instruction. "
        },
        "MASTER_ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The master order base GID to be set on the order release created from the line. An order release can be created from multiple order bases and one of them is nominated as the master to get master level information for such as bill to party."
        }
      },
      "fk_tables": [
        "OB_RELEASE_INSTRUCTION",
        "OB_SU_RELEASE_INSTR_REFNUM",
        "OB_SU_RELEASE_INSTR_REMARK"
      ]
    }
  }
};
