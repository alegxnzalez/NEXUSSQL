// GTM_TRADE_AGREEMENT.js

window.GTM_TRADE_AGREEMENT = {
  "tables": {
    "GTM_TRADE_AGREEMENT": {
      "description": "Trade Agreement Details",
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
        "GTM_TRADE_AGREEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Specifies the unique identifier across all domains for GTM Trade Agreement."
},
        "GTM_TRADE_AGREEMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Specifies the unique identifier in a particular domain for GTM Trade Agreement."
},
        "GTM_TA_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TA_TYPE",
          "info": "Specifies the unique identifier across all domains for GTM Trade Agreement Type."
},
        "GTM_TA_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Name of the Trade Agreement."
},
        "GTM_TA_SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Short name for the Trade Agreement."
},
        "GTM_TA_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "External code for Trade Agreement."
},
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DATA_VERSION",
          "info": "This field represents data version of trade agreement."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
},
        "IS_DIRECT_SHIP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DE_MINIMIS_FORMULA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Identifies the de minimis formula of the trade agreement."
},
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "IS_ROLLUP_ALLOWED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Identifies if the rollup provision is allowed for the trade agreement."
},
        "ALLOW_PARTIAL_CREDIT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow Partial Credit checkbox"
},
        "ALLOW_PRORATE_ON_MULTI_SRC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Identifies if prorating is allowed on multi-sourcing for the trade agreement."
}
      },
      "fk_tables": [
        "GTM_CAMPAIGN",
        "GTM_TA_DEPENDENT_FORMULA",
        "GTM_TA_MEMBER",
        "GTM_TA_PARTNER",
        "GTM_TA_REFNUM",
        "GTM_TA_REMARK",
        "GTM_TA_ROO_FORMULA",
        "GTM_TA_RVC_METHOD",
        "GTM_TRANS_LINE_QF",
        "ITEM_QF",
        "QF_PREFERENCE_CRITERIA"
]
    }
  }
};