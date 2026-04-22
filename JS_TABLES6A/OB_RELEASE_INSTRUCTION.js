// OB_RELEASE_INSTRUCTION.js

window.OB_RELEASE_INSTRUCTION = {
  "tables": {
    "OB_RELEASE_INSTRUCTION": {
      "columns": {
        "OB_RELEASE_INSTR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the release instruction associated to the order base line. "
        },
        "OB_RELEASE_INSTR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the release instruction. "
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The order base GID associated with the release instruction. "
        },
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OB_LINE",
          "info": "The order base line GID that is the source of demand for this release instruction to be processed. "
        },
        "OB_RELEASE_INSTRUCTION_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The sequence number (key) associated with the release instruction. "
        },
        "QUANTITY_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The quantity qualifier dimension to be used for this instruction - such as weight, volume or count. "
        },
        "IS_PROCESSED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A Y/N indicator specifying that the release instruction was processed to create an order release line. "
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
        "RELEASE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the release instruction is to be processed. "
        },
        "WEIGHT_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight for the release instruction. "
        },
        "WEIGHT_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight unit of measure. "
        },
        "WEIGHT_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight in the base unit of measure. "
        },
        "VOLUME_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume for the release instruction. "
        },
        "VOLUME_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The volume unit of measure. "
        },
        "VOLUME_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume in the base unit of measure. "
        },
        "UNIT_VALUE": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The unit count if the instruction in packaged item count based. "
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
        "FLAGGED_FOR_DELETE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator specifying that the release instruction can be deleted by an agent or user defined process. "
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
        "SHIP_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The ship unit count value that can be copied to the order release for a specific case of handling line based releases with some limited ship unit information. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit for the ship Unit count value that can be copied to the order release for a specific case of handling line based releases with some limited ship unit information. "
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
          "info": "The ship with group identifier that is added to the order release to group them together onto the same shipment. "
        },
        "OB_SU_RELEASE_INSTRUCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_SU_RELEASE_INSTRUCTION",
          "info": "The order base ship unit release instruction GID that is used for the order configuration type of directed pack. Here you supply the line level information together with the ship unit instructions for creating the order release ship unit from this instruction instead of prepack, autocalc, or one to one."
        }
      },
      "fk_tables": [
        "OB_RELEASE_INSTRUCTION_REFNUM",
        "OB_RELEASE_INSTRUCTION_REMARK"
      ]
    }
  }
};
