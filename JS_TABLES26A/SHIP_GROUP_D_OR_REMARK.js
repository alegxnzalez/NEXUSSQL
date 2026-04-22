// SHIP_GROUP_D_OR_REMARK.js

window.SHIP_GROUP_D_OR_REMARK = {
  "tables": {
    "SHIP_GROUP_D_OR_REMARK": {
      "description": "defines the  remarks for partial shipments in the shipment group.",
      "columns": {
        "SHIP_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP_D_OR",
          "info": "The GID for the shipment group."
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP_D_OR",
          "info": "The GID of shipment in the shipment group."
},
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP_D_OR",
          "info": "The equipment GID of the shipment that contains the order release and order release lines for a partial shipment group."
},
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP_D_OR",
          "info": "For a partial shipment group, the order release that are a part of the shipment in the shipment group."
},
        "SEQ_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP_D_OR",
          "info": "For a partial shipment group, the order release lines that are a part of the shipment in the shipment group."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The one-up number to make the remark record unique."
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "The remark qualifier, or remark type."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "User entered remark on the shipment group order release"
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