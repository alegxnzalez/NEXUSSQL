// SHIP_UNIT_CHILD.js

window.SHIP_UNIT_CHILD = {
  "tables": {
    "SHIP_UNIT_CHILD": {
      "description": "This table creates the hierarchy of the ship units at the order release level.",
      "columns": {
        "PARENT_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT",
          "info": "A unique identifier to define the shipping unit that will be used for the order release line. The gid contains the domain portion."
},
        "CHILD_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT",
          "info": "A unique identifier to define the shipping unit that will be used for the order release line. The gid contains the domain portion."
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
      "fk_tables": []
    }
  }
};