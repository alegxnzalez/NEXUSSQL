// VAT_PROVINCIAL_CNFG_PERSP_D.js

window.VAT_PROVINCIAL_CNFG_PERSP_D = {
  "tables": {
    "VAT_PROVINCIAL_CNFG_PERSP_D": {
      "description": "Indicates the ordered set of VAT codes that should be applied given the source and destination provinces",
      "columns": {
        "VAT_CONFIGURATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_PROVINCIAL_CNFG_PERSP",
          "info": "Together with PERSPECTIVE and COUNTRY_CODE3_GID, indicates the VAT_PROVINCIAL_CNFG_PERSP that this rule detail belongs to"
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_PROVINCIAL_CNFG_PERSP",
          "info": "Together with VAT_CONFIGURATION_GID and COUNTRY_CODE3_GID, indicates the VAT_PROVINCIAL_CNFG_PERSP that this rule detail belongs to"
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VAT_PROVINCIAL_CNFG_PERSP",
          "info": "Together with VAT_CONFIGURATION_GID and PERSPECTIVE, indicates the VAT_PROVINCIAL_CNFG_PERSP that this rule detail belongs to"
},
        "SRC_PROVINCE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PROVINCE_CODE_PROFILE",
          "info": "Tax calculation logic will use this field to determine if the source location of the order or shipment fits this province profile; helps determine the VAT_PROVINCIAL_CNFG_PERSP_D record that applies"
},
        "DEST_PROVINCE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PROVINCE_CODE_PROFILE",
          "info": "Tax calculation logic will use this field to determine if the destination location of the order or shipment fits this province profile; helps determine the VAT_PROVINCIAL_CNFG_PERSP_D record that applies"
},
        "VAT_CODE_ORDERED_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VAT_CODE_ORDERED_SET",
          "info": "Set of VAT codes to be applied if this VAT_PROVINCIAL_CNFG_PERSP_D record applies applies"
},
        "PROVINCE_SOURCE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
                    "NONE",
                    "ORDER_SOURCE",
                    "ORDER_DEST",
                    "SHIPMENT_SOURCE",
                    "SHIPMENT_DEST",
                    "CUSTOMER",
                    "SERVPROV"
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
}
      },
      "fk_tables": []
    }
  }
};