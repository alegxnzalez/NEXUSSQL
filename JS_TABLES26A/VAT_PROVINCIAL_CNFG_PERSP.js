// VAT_PROVINCIAL_CNFG_PERSP.js

window.VAT_PROVINCIAL_CNFG_PERSP = {
  "tables": {
    "VAT_PROVINCIAL_CNFG_PERSP": {
      "description": "Child of VAT_CONFIGURATION; contains information on provincial tax for a particular country and perspective;  similar to VAT_CONFIGURATION_PERSPECTIVE, but for provincial tax instead of European VAT",
      "columns": {
        "VAT_CONFIGURATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_CONFIGURATION",
          "info": "The id for the VAT Configuration this record belongs to"
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "key_value": true,
          "values": [
                    "A",
                    "B",
                    "S"
          ],
          "info": "Perspective to indicate when this rule should be applied"
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Specifies the country code to indicate when this rule should be applied"
},
        "GOODS_LOCATION_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "ORDER",
                    "SHIPMENT"
          ],
          "info": "Indicates how tax calculation logic should determine the origin and destination of goods"
},
        "CUSTOMER_INV_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "This is the involved party which determines the 'customer' for the purpose of determining Provincial Tax. Usually BILL-TO"
},
        "IS_ALLOCATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether the tax should be allocated."
},
        "IMPORT_VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_CODE",
          "info": "If specified, this code will be used for import moves"
},
        "EXPORT_VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_CODE",
          "info": "If specified, this code will be used for export moves"
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
        "VAT_PROVINCIAL_CNFG_PERSP_D"
]
    }
  }
};