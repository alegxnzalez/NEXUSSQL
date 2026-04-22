// BILL_TO_PARTY_ASSIGNMENT_D.js

window.BILL_TO_PARTY_ASSIGNMENT_D = {
  "tables": {
    "BILL_TO_PARTY_ASSIGNMENT_D": {
      "description": "This is a child table for BILL_TO_PARTY_ASSIGNMENT. It contains accessorial code, cost type, cost identifier and involved party qualifier ID. Involved party qualifier ID will be assigned to the line based on accessorial code, cost type and cost identifier.",
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
        "COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "foreign_key": "COST_TYPE",
          "info": "Cost type"
},
        "COST_IDENTIFIER": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "It will be used for differentiating among different costs of the same cost type."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Accesorial code"
},
        "INV_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The involved party corresponding to this qualifier will be assigned as bill to party on the invoice."
},
        "BILL_TO_PARTY_ASSIGN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BILL_TO_PARTY_ASSIGNMENT",
          "info": "The GID for bill_to_party_assignment."
},
        "SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number"
}
      },
      "fk_tables": []
    }
  }
};