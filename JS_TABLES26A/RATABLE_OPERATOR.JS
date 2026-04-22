// RATABLE_OPERATOR.js

window.RATABLE_OPERATOR = {
  "tables": {
    "RATABLE_OPERATOR": {
      "description": "Private data that drives the internal behavior of the Rating Engine.",
      "columns": {
        "RATABLE_OPERATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATABLE_OPERATOR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "JAVA_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": false
},
        "CONDITIONAL_FIELDS_USED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "N",
                    "L",
                    "B"
          ]
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "ACCESSORIAL_COST",
        "RATE_GEO_COST",
        "RATE_GEO_COST_OPERAND"
]
    }
  }
};