// PI_PU_JOIN.js

window.PI_PU_JOIN = {
  "tables": {
    "PI_PU_JOIN": {
      "columns": {
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
          "nullable": false,
          "key_value": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The GID for the packaged item related to the packing unit and inner pack count information being added, updated, or removed. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the packaged unit. "
        },
        "INNER_PACK_COUNT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Count for the number of items in the inner pack. For example, case of soda inner pack six pack with count of four. The Inner Pack Count field gives you a place to enter how many of the item is packaged in this packaging unit. This information is for informational purposes only and will only be visible if you select Packaging Unit in the header section."
        }
      },
      "fk_tables": []
    }
  }
};
