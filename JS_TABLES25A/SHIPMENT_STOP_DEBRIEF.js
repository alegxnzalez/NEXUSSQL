// SHIPMENT_STOP_DEBRIEF.js

window.SHIPMENT_STOP_DEBRIEF = {
  "tables": {
    "SHIPMENT_STOP_DEBRIEF": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The GID for the shipment. "
        },
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The stop number. "
        },
        "ACTIVITY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "P",
            "D",
            "O"
          ],
          "key_value": true,
          "info": "Specifies the activity (pickup, drop off) for the stop and the debrief values. "
        },
        "SEQUENCE_NO": {
          "type": "VARCHAR2(22)",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number (key). "
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_SHIP_UNIT",
          "info": "The GID for ship unit for the shipment. "
        },
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(10)",
          "nullable": true,
          "foreign_key": "S_SHIP_UNIT_LINE",
          "info": "The GID for ship unit line number for the shipment. "
        },
        "ITEM_PACKAGE_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The count of the package item count. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The packaging unit GID for the packaging unit count that is contained in the packaged item. "
        },
        "PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The packaging unit count for the packing unit contained in the packaged item. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit GID associated with the transport handling unit. "
        },
        "TRANSPORT_HANDLING_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The transport handling count GID for the stop debrief. "
        },
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "The item GID for the stop debrief. "
        },
        "NON_CONF_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NON_CONF_REASON_CODE",
          "info": "The non conformance reason code GID associated with the stop debrief recording. "
        },
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT",
          "info": "The ship unit GID linked to the stop debrief. "
        },
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_EQUIPMENT",
          "info": "The equipment GID linked to the stop debrief. "
        },
        "MATCH_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "MATCH",
            "OVER",
            "UNDER",
            "ERROR"
          ],
          "info": "The match type code for linking the stop debrief data. "
        },
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "The order release line GID linked to the stop debrief. "
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
      "fk_tables": []
    }
  }
};
