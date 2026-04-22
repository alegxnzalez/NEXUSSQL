// VAT_CONFIGURATION_PERSPECTIVE.js

window.VAT_CONFIGURATION_PERSPECTIVE = {
  "tables": {
    "VAT_CONFIGURATION_PERSPECTIVE": {
      "columns": {
        "VAT_CONFIGURATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_CONFIGURATION"
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "key_value": true,
          "values": [
                    "A",
                    "B",
                    "S"
          ]
},
        "GOODS_LOCATION_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "SHIPMENT",
                    "ORDER"
          ],
          "info": "Determines whether orgin and destination of goods is based on SHIPMENT origin or ORDER origin."
},
        "CUSTOMER_INV_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "This is the involved party which determines the 'customer' for the purpose of determining VAT. Usually BILL-TO"
},
        "IS_ALLOCATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Determines if VAT should be allocated.  If not, order with VAT_OUTCOME with highest priority is used for the entire line."
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
        "VAT_CONFIGURATION_PERSP_D"
]
    }
  }
};