// ALLOCATION_OB_LINE_D.js

window.ALLOCATION_OB_LINE_D = {
  "tables": {
    "ALLOCATION_OB_LINE_D": {
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
        "ALLOC_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ALLOCATION_BASE"
},
        "ALLOC_COST_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OB_LINE"
},
        "COST_DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE"
},
        "COST": {
          "type": "NUMBER",
          "nullable": true
},
        "COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE_LINEITEM"
},
        "LINEITEM_SEQ_NO": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "INVOICE_LINEITEM"
},
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE"
},
        "COST_FN": {
          "type": "NUMBER",
          "nullable": true
},
        "COST_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "COST_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SHIPMENT_COST_SEQNO": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "VOUCHER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE"
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is VARCHAR2 (150)."
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is NUMBER."
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is DATE."
},
        "ATTRIBUTE_CURRENCY1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is Currency."
},
        "ATTRIBUTE_CURRENCY1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the attribute field."
},
        "ATTRIBUTE_CURRENCY1_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The currecy attribute field value in base currency."
},
        "ATTRIBUTE_CURRENCY2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is Currency."
},
        "ATTRIBUTE_CURRENCY2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the attribute field."
},
        "ATTRIBUTE_CURRENCY2_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The currecy attribute field value in base currency."
},
        "ATTRIBUTE_CURRENCY3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute (flex)fields allow you to add additional information about an object. Data type is Currency."
},
        "ATTRIBUTE_CURRENCY3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The currency identifier for the attribute field."
},
        "ATTRIBUTE_CURRENCY3_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The currecy attribute field value in base currency."
},
        "VAT_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_CODE",
          "info": "The GID for the VAT tax that is being allocated from voucher."
}
      },
      "fk_tables": []
    }
  }
};