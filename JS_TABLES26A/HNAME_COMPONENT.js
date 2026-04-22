// HNAME_COMPONENT.js

window.HNAME_COMPONENT = {
  "tables": {
    "HNAME_COMPONENT": {
      "description": "This table defines the hierarchy name of the location. The hierarchy can be any combination and levels of the name.  For e.g.,  USA/PA/Philadelphia is a three level hierarchy with Country/State/City, USA/19406 is a two level hierarchy with Country/Postal Code.",
      "columns": {
        "HNAME_COMPONENT_GID": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "HNAME_COMPONENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "LOCATION_COLUMN_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
},
        "START_OFFSET": {
          "type": "NUMBER(2)",
          "nullable": true
},
        "END_OFFSET": {
          "type": "NUMBER(2)",
          "nullable": true
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
        "GEO_HIERARCHY_DETAIL"
]
    }
  }
};