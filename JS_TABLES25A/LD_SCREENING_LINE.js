// LD_SCREENING_LINE.js

window.LD_SCREENING_LINE = {
  "tables": {
    "LD_SCREENING_LINE": {
      "columns": {
        "LDSCREENING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LD_SCREENING",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ITEM_ID": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "info": "The GC3 OrderBase Line, Release Line or Sship Unit Line Item GID which is the basis for this export license line item service request. "
        },
        "ORDER_RELEASE_LINE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "A unique identifier to define the multiple order release lines per order release. The gid has the domain portion. "
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "S_SHIP_UNIT_LINE",
          "info": "A unique pointer to define the shipment ship unit. The gid contains the domain portion. "
        },
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(4)",
          "nullable": true,
          "foreign_key": "S_SHIP_UNIT_LINE",
          "info": "The unique sequence within the ship unit to define the individual line items. "
        },
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_LINE",
          "info": "A unique identifier to define the line items in the order. The gid contains the domain portion. "
        },
        "RESULT_CODE": {
          "type": "NUMBER(4)",
          "nullable": false,
          "info": "A success or failure code from the ITL Vendor's system, related to this line item in the service message."
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
        "LD_SCREENING_LICENSE"
      ]
    }
  }
};
