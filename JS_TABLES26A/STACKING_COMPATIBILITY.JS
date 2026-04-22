// STACKING_COMPATIBILITY.js

window.STACKING_COMPATIBILITY = {
  "tables": {
    "STACKING_COMPATIBILITY": {
      "columns": {
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
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "BOTTOM_PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM"
},
        "BOTTOM_PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
},
        "BOTTOM_THU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
},
        "BOTTOM_ORIENTATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORIENTATION"
},
        "TOP_PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM"
},
        "TOP_PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
},
        "TOP_THU_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
},
        "TOP_ORIENTATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORIENTATION"
},
        "IS_STACKABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_FOR_SHIP_UNIT_BUILDING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if this stacking compatibility is to be used for ship unit building."
}
      },
      "fk_tables": []
    }
  }
};