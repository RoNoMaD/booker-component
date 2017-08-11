export function getBookings() {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          {
            beneficiaryEmailHasBeenSent: false,
            beneficiary: null,
            calledForBalance: false,
            calledForBalanceOn: null,
            cancelDate: null,
            cancellationName: null,
            cancellationRefundAmount: 0.0,
            cancellationRefundIncludesTax: null,
            cancellationRefundNature: null,
            cancellationRefundType: null,
            cancellationStartDate: null,
            cancellationStartDateUnit: null,
            cancelReason: null,
            discount: null,
            discountDetails: null,
            discountType: null,
            downPayment: null,
            downPaymentCancelled: null,
            downPaymentValidated: null,
            formsFilled: false,
            messagePerso: null,
            note: null,
            openTicket: false,
            participants: null,
            paymentType: null,
            paysOnArrival: false,
            privatized: false,
            productPriceHt: 104.17,
            productTax: 250.0,
            productTotalTaxExcluded: 208.33,
            promoCodeGenerated: null,
            qrcode: '7931418370450',
            quantity: 2,
            reference: 'DFZAI',
            refundAmount: null,
            startTime: '2017-08-02T11:00:00+02:00',
            tax: 20.0,
            taxAmount: 41.666667,
            termCancel: null,
            token: 'fSxE624tFFcFf83P',
            totalPriceHt: 208.33,
            totalTax: 250.0,
            unitQuantityDeclarations: null,
            creationDate: '2017-07-31T17:35:12+02:00',
            id: 12102,
            _embedded: {
              product: {
                type: 'CLASSIC',
                activityDuration: 5400,
                barCode: null,
                bookingManagement: 'MANUAL',
                bookingManagementManualLimit: 0,
                canBePrivatized: true,
                capacityManagement: 'CAPACITY',
                color: '#6aa84f',
                delayBeforeBooking: 604800,
                delayBetweenBooking: 604800,
                description:
                  "Après un briefing et un test d'évaluation, vous partez en groupe accompagné de votre guide au coeur du vignoble. Une pause sera proposée après 45 mn de balade pour mieux repartir ! Possibilité de changer de pilote à mi-parcours. \nPensez à adapter votre tenue vestimentaire en fonction de la météo : baskets ou bottes, jean ou kway.... \nNous fournissons le casque, la charlotte ou la cagoule et les gants si nécessaire.",
                directSales: false,
                displayedStartingPrice: 125,
                images: null,
                information: null,
                marketplaceSales: true,
                maxParticipants: 7,
                minBookings: 1,
                minParticipants: 1,
                minParticipantsToPrivatize: 8,
                name: 'RANGER DUO 1H30',
                participantPreciseInformationRequired: null,
                partnerSales: false,
                prices: null,
                pricingType: null,
                primaryImage: null,
                reference: '350250850',
                reservationShowAvailabilityLeft: false,
                scheduleType: 'OPEN_BILLET',
                sellingTarget: 'PROFESSIONAL',
                showAvailability: null,
                status: 'PUBLISHED',
                subscribeNow: null,
                summary:
                  'Rando Ranger 1H30 en duo (2 personnes sur le même quad). Rando quad découverte accessible à tous. Enfant passager accepté à partir de 6 ans. Le parcours est aisé pour une longueur d\'environ 25 km entre bois, sous-bois, chemins le long des vignes avec des points de vue "nature" magnifiques !',
                validityDuration: 3,
                webSales: false,
                creationDate: null,
                id: 598,
                _embedded: {
                  tags: []
                },
                _links: {
                  subCategory: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/product_sub_categories/58'
                  },
                  unit: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/units/2608'
                  },
                  address: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/addresses/877'
                  },
                  merchant: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/companies/350'
                  },
                  self: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/598'
                  },
                  tax: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/taxes/2'
                  },
                  category: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/product_categories/3'
                  }
                }
              },
              commissionsAmounts: {
                bank: 5.625000018,
                activity: 0.0,
                reseller: 0.0
              },
              promoCodes: [],
              timeRanges: [
                {
                  endTime: '2017-08-02T12:30:00+02:00',
                  sessionIndex: 1,
                  startTime: '2017-08-02T11:00:00+02:00',
                  status: null,
                  id: 3004,
                  _embedded: {
                    unitQuantities: [
                      {
                        priceHt: 104.166667,
                        quantity: 2,
                        sessionIndex: 1,
                        sessionQuantity: 1,
                        tax: 20.0,
                        taxAmount: 41.666667,
                        totalTaxExcluded: 208.333334,
                        id: 2149,
                        _embedded: {
                          unitSaved: {
                            type: 'MAIN',
                            name: 'quad 2pers',
                            plural: null,
                            sliceQuantity: 1,
                            id: 2608,
                            _links: {
                              merchant: {
                                href:
                                  'https://staging-open-api.myeasyloisirs.com/v1/companies/350'
                              },
                              self: {
                                href:
                                  'https://staging-open-api.myeasyloisirs.com/v1/units/2608'
                              }
                            }
                          }
                        },
                        _links: {
                          unit: {
                            href:
                              'https://staging-open-api.myeasyloisirs.com/v1/units/2608'
                          },
                          self: {
                            href:
                              'https://staging-open-api.myeasyloisirs.com/v1/booking_unit_quantites/2149'
                          },
                          bookingTimeRange: {
                            href:
                              'https://staging-open-api.myeasyloisirs.com/v1/booking_time_ranges/3004'
                          }
                        }
                      }
                    ]
                  },
                  _links: {
                    booking: {
                      href:
                        'https://staging-open-api.myeasyloisirs.com/v1/bookings/12102'
                    },
                    self: {
                      href:
                        'https://staging-open-api.myeasyloisirs.com/v1/booking_time_ranges/3004'
                    }
                  }
                }
              ]
            },
            _links: {
              merchant: {
                href:
                  'https://staging-open-api.myeasyloisirs.com/v1/companies/350'
              },
              self: {
                href:
                  'https://staging-open-api.myeasyloisirs.com/v1/bookings/12102'
              },
              order: {
                href:
                  'https://staging-open-api.myeasyloisirs.com/v1/orders/7247'
              },
              status: {
                href:
                  'https://staging-open-api.myeasyloisirs.com/v1/statuses/11'
              }
            }
          },
          {
            beneficiaryEmailHasBeenSent: false,
            beneficiary: null,
            calledForBalance: false,
            calledForBalanceOn: null,
            cancelDate: null,
            cancellationName: null,
            cancellationRefundAmount: 0.0,
            cancellationRefundIncludesTax: null,
            cancellationRefundNature: null,
            cancellationRefundType: null,
            cancellationStartDate: null,
            cancellationStartDateUnit: null,
            cancelReason: null,
            discount: null,
            discountDetails: null,
            discountType: null,
            downPayment: null,
            downPaymentCancelled: null,
            downPaymentValidated: null,
            formsFilled: false,
            messagePerso: null,
            note: null,
            openTicket: false,
            participants: null,
            paymentType: null,
            paysOnArrival: false,
            privatized: false,
            productPriceHt: 104.17,
            productTax: 125.0,
            productTotalTaxExcluded: 104.17,
            promoCodeGenerated: null,
            qrcode: '3793480222576',
            quantity: 1,
            reference: 'SNEKZ',
            refundAmount: null,
            startTime: '2017-08-10T11:00:00+02:00',
            tax: 20.0,
            taxAmount: 20.833333,
            termCancel: null,
            token: 'LBGFDydD1fLhe4OY',
            totalPriceHt: 104.17,
            totalTax: 125.0,
            unitQuantityDeclarations: null,
            creationDate: '2017-07-31T17:55:01+02:00',
            id: 12104,
            _embedded: {
              product: {
                type: 'CLASSIC',
                activityDuration: 3600,
                barCode: null,
                bookingManagement: 'MANUAL',
                bookingManagementManualLimit: 0,
                canBePrivatized: true,
                capacityManagement: 'CAPACITY',
                color: '#073763',
                delayBeforeBooking: 86400,
                delayBetweenBooking: 86400,
                description:
                  "Après un briefing et un test d'évaluation, vous partez  accompagné de votre guide au coeur du vignoble.  Possibilité de changer de pilote à mi-parcours si vous êtes en duo. \nPensez à adapter votre tenue vestimentaire en fonction de la météo : baskets ou bottes, jean ou kway.... \nNous fournissons le casque, la charlotte ou la cagoule et les gants si nécessaire.",
                directSales: false,
                displayedStartingPrice: 125,
                images: null,
                information: null,
                marketplaceSales: true,
                maxParticipants: 2,
                minBookings: 1,
                minParticipants: 1,
                minParticipantsToPrivatize: 1,
                name: 'V.I.P. DECOUVERTE 1H00',
                participantPreciseInformationRequired: null,
                partnerSales: false,
                prices: null,
                pricingType: null,
                primaryImage: null,
                reference: '350695609',
                reservationShowAvailabilityLeft: false,
                scheduleType: 'OPEN_BILLET',
                sellingTarget: 'ALL',
                showAvailability: null,
                status: 'PUBLISHED',
                subscribeNow: null,
                summary:
                  'Une idée de cadeau originale pour un anniversaire, un mariage,\nune Saint-Valentin, un départ à la retraite... \nEn Solo ou en Duo, vous construisez votre rando à la carte avec votre guide et vous partez pour une aventure à la carte, seul avec votre accompagnateur.\nUne aventure qui marquera les esprits !',
                validityDuration: 6,
                webSales: false,
                creationDate: null,
                id: 607,
                _embedded: {
                  tags: []
                },
                _links: {
                  subCategory: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/product_sub_categories/58'
                  },
                  unit: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/units/4871'
                  },
                  address: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/addresses/882'
                  },
                  merchant: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/companies/350'
                  },
                  self: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/607'
                  },
                  tax: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/taxes/2'
                  },
                  category: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/product_categories/3'
                  }
                }
              },
              commissionsAmounts: {
                bank: 2.812500009,
                activity: 0.0,
                reseller: 0.0
              },
              promoCodes: [],
              timeRanges: [
                {
                  endTime: '2017-08-10T12:00:00+02:00',
                  sessionIndex: 1,
                  startTime: '2017-08-10T11:00:00+02:00',
                  status: null,
                  id: 3006,
                  _embedded: {
                    unitQuantities: [
                      {
                        priceHt: 104.166667,
                        quantity: 1,
                        sessionIndex: 1,
                        sessionQuantity: 1,
                        tax: 20.0,
                        taxAmount: 20.833333,
                        totalTaxExcluded: 104.166667,
                        id: 2151,
                        _embedded: {
                          unitSaved: {
                            type: 'MAIN',
                            name: 'Pilote',
                            plural: null,
                            sliceQuantity: 1,
                            id: 4871,
                            _links: {
                              merchant: {
                                href:
                                  'https://staging-open-api.myeasyloisirs.com/v1/companies/350'
                              },
                              self: {
                                href:
                                  'https://staging-open-api.myeasyloisirs.com/v1/units/4871'
                              }
                            }
                          }
                        },
                        _links: {
                          unit: {
                            href:
                              'https://staging-open-api.myeasyloisirs.com/v1/units/4871'
                          },
                          self: {
                            href:
                              'https://staging-open-api.myeasyloisirs.com/v1/booking_unit_quantites/2151'
                          },
                          bookingTimeRange: {
                            href:
                              'https://staging-open-api.myeasyloisirs.com/v1/booking_time_ranges/3006'
                          }
                        }
                      }
                    ]
                  },
                  _links: {
                    booking: {
                      href:
                        'https://staging-open-api.myeasyloisirs.com/v1/bookings/12104'
                    },
                    self: {
                      href:
                        'https://staging-open-api.myeasyloisirs.com/v1/booking_time_ranges/3006'
                    }
                  }
                }
              ]
            },
            _links: {
              merchant: {
                href:
                  'https://staging-open-api.myeasyloisirs.com/v1/companies/350'
              },
              self: {
                href:
                  'https://staging-open-api.myeasyloisirs.com/v1/bookings/12104'
              },
              order: {
                href:
                  'https://staging-open-api.myeasyloisirs.com/v1/orders/7247'
              },
              status: {
                href:
                  'https://staging-open-api.myeasyloisirs.com/v1/statuses/11'
              }
            }
          }
        ]),
      2000
    )
  );
}

export function getOrder() {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          finalized: false,
          origin: 'OPEN_API',
          qrCode: '4463407197752',
          reference: 'SERESUSXTVJB',
          totalDownPayment: null,
          totalPrice: 424.0,
          totalPriceHt: 353.33,
          updateDate: '2017-08-01T10:40:55+02:00',
          user: null,
          userSaved: null,
          creationDate: '2017-08-01T10:40:55+02:00',
          id: 7248,
          _embedded: {
            bookings: [
              {
                beneficiaryEmailHasBeenSent: false,
                beneficiary: null,
                calledForBalance: false,
                calledForBalanceOn: null,
                cancelDate: null,
                cancellationName: null,
                cancellationRefundAmount: 0.0,
                cancellationRefundIncludesTax: null,
                cancellationRefundNature: null,
                cancellationRefundType: null,
                cancellationStartDate: null,
                cancellationStartDateUnit: null,
                cancelReason: null,
                discount: null,
                discountDetails: null,
                discountType: null,
                downPayment: null,
                downPaymentCancelled: null,
                downPaymentValidated: null,
                formsFilled: false,
                messagePerso: null,
                note: null,
                openTicket: false,
                participants: null,
                paymentType: null,
                paysOnArrival: false,
                privatized: false,
                productPriceHt: 187.5,
                productTax: 225.0,
                productTotalTaxExcluded: 187.5,
                promoCodeGenerated: null,
                qrcode: '3685275195523',
                quantity: 1,
                reference: 'VBYUV',
                refundAmount: null,
                startTime: '2017-08-17T11:00:00+02:00',
                tax: 20.0,
                taxAmount: 37.5,
                termCancel: null,
                timeRanges: null,
                token: 'UNAnJj6sSVCJ7HHX',
                totalPriceHt: 187.5,
                totalTax: 225.0,
                unitQuantityDeclarations: null,
                creationDate: '2017-08-01T10:40:55+02:00',
                id: 12105,
                _embedded: {
                  commissionsAmounts: {
                    bank: 5.0625,
                    activity: 0.0,
                    reseller: 0.0
                  },
                  promoCodes: []
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/608'
                  },
                  merchant: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/companies/350'
                  },
                  self: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/bookings/12105'
                  },
                  order: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/orders/7248'
                  },
                  status: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/statuses/11'
                  }
                }
              },
              {
                beneficiaryEmailHasBeenSent: false,
                beneficiary: null,
                calledForBalance: false,
                calledForBalanceOn: null,
                cancelDate: null,
                cancellationName: null,
                cancellationRefundAmount: 0.0,
                cancellationRefundIncludesTax: null,
                cancellationRefundNature: null,
                cancellationRefundType: null,
                cancellationStartDate: null,
                cancellationStartDateUnit: null,
                cancelReason: null,
                discount: null,
                discountDetails: null,
                discountType: null,
                downPayment: null,
                downPaymentCancelled: null,
                downPaymentValidated: null,
                formsFilled: false,
                messagePerso: null,
                note: null,
                openTicket: false,
                participants: null,
                paymentType: null,
                paysOnArrival: false,
                privatized: false,
                productPriceHt: 165.83,
                productTax: 199.0,
                productTotalTaxExcluded: 165.83,
                promoCodeGenerated: null,
                qrcode: '7594628362869',
                quantity: 1,
                reference: 'KWGRH',
                refundAmount: null,
                startTime: '2017-08-22T11:00:00+02:00',
                tax: 20.0,
                taxAmount: 33.166667,
                termCancel: null,
                timeRanges: null,
                token: 'tdRluIlkTz7wGlVy',
                totalPriceHt: 165.83,
                totalTax: 199.0,
                unitQuantityDeclarations: null,
                creationDate: '2017-08-01T11:36:27+02:00',
                id: 12106,
                _embedded: {
                  commissionsAmounts: {
                    bank: 4.477499991,
                    activity: 0.0,
                    reseller: 0.0
                  },
                  promoCodes: []
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/603'
                  },
                  merchant: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/companies/350'
                  },
                  self: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/bookings/12106'
                  },
                  order: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/orders/7248'
                  },
                  status: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/statuses/11'
                  }
                }
              }
            ]
          },
          _links: {
            self: {
              href: 'https://staging-open-api.myeasyloisirs.com/v1/orders/7248'
            },
            company: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/companies/647'
            }
          }
        }),
      2000
    )
  );
}

export function getProductMonthAvailabilities() {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          _embedded: {
            productDayAvailabilities: [
              {
                bookable: true,
                date: '2017-08-08T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-09T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-10T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-11T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-12T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: false,
                date: '2017-08-13T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-14T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-15T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-16T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-17T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-18T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-19T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: false,
                date: '2017-08-20T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-21T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-22T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-23T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-24T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-25T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-26T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: false,
                date: '2017-08-27T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-28T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-29T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-30T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              },
              {
                bookable: true,
                date: '2017-08-31T00:00:00Z',
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  },
                  season: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/seasons/0'
                  }
                }
              }
            ]
          },
          _links: {
            last: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_day_availabilities?page=1'
            },
            self: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_day_availabilities?page=1'
            },
            first: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_day_availabilities?page=1'
            }
          },
          pageCount: 1,
          pageSize: 24,
          totalItems: 24,
          page: 1
        }),
      2000
    )
  );
}

export function getProductTimeSlotAvailabilities() {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          _embedded: {
            productTimeSlotAvailabilities: [
              {
                bookedQuantity: 0,
                superStaff: false,
                remainingBookingCapacity: 15,
                startDateTime: '2017-08-30T10:00:00Z',
                creationDate: '2017-08-09T10:14:54+02:00',
                _embedded: {
                  productUnitTimeSlotAvailabilities: [
                    {
                      canBePrivatized: true,
                      remainingBookingCapacity: 15,
                      startDateTime: '2017-08-30T10:00:00Z',
                      creationDate: '2017-08-09T10:14:54+02:00',
                      _embedded: {
                        unit: {
                          type: 'TARGET',
                          name: 'ENFANT',
                          plural: null,
                          sliceQuantity: 1,
                          id: 109,
                          _links: {
                            merchant: {
                              href:
                                'https://staging-open-api.myeasyloisirs.com/v1/companies/271'
                            },
                            self: {
                              href:
                                'https://staging-open-api.myeasyloisirs.com/v1/units/109'
                            }
                          }
                        },
                        resources: []
                      },
                      _links: {
                        product: {
                          href:
                            'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                        }
                      }
                    },
                    {
                      canBePrivatized: true,
                      remainingBookingCapacity: 15,
                      startDateTime: '2017-08-30T10:00:00Z',
                      creationDate: '2017-08-09T10:14:54+02:00',
                      _embedded: {
                        unit: {
                          type: 'MAIN',
                          name: 'PERSONNE',
                          plural: null,
                          sliceQuantity: 1,
                          id: 2084,
                          _links: {
                            merchant: {
                              href:
                                'https://staging-open-api.myeasyloisirs.com/v1/companies/271'
                            },
                            self: {
                              href:
                                'https://staging-open-api.myeasyloisirs.com/v1/units/2084'
                            }
                          }
                        },
                        resources: []
                      },
                      _links: {
                        product: {
                          href:
                            'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                        }
                      }
                    }
                  ],
                  productResourceTimeSlotAvailabilities: []
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  }
                }
              },
              {
                bookedQuantity: 0,
                superStaff: false,
                remainingBookingCapacity: 15,
                startDateTime: '2017-08-30T14:00:00Z',
                creationDate: '2017-08-09T10:14:54+02:00',
                _embedded: {
                  productUnitTimeSlotAvailabilities: [
                    {
                      canBePrivatized: true,
                      remainingBookingCapacity: 15,
                      startDateTime: '2017-08-30T14:00:00Z',
                      creationDate: '2017-08-09T10:14:54+02:00',
                      _embedded: {
                        unit: {
                          type: 'TARGET',
                          name: 'ENFANT',
                          plural: null,
                          sliceQuantity: 1,
                          id: 109,
                          _links: {
                            merchant: {
                              href:
                                'https://staging-open-api.myeasyloisirs.com/v1/companies/271'
                            },
                            self: {
                              href:
                                'https://staging-open-api.myeasyloisirs.com/v1/units/109'
                            }
                          }
                        },
                        resources: []
                      },
                      _links: {
                        product: {
                          href:
                            'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                        }
                      }
                    },
                    {
                      canBePrivatized: true,
                      remainingBookingCapacity: 15,
                      startDateTime: '2017-08-30T14:00:00Z',
                      creationDate: '2017-08-09T10:14:54+02:00',
                      _embedded: {
                        unit: {
                          type: 'MAIN',
                          name: 'PERSONNE',
                          plural: null,
                          sliceQuantity: 1,
                          id: 2084,
                          _links: {
                            merchant: {
                              href:
                                'https://staging-open-api.myeasyloisirs.com/v1/companies/271'
                            },
                            self: {
                              href:
                                'https://staging-open-api.myeasyloisirs.com/v1/units/2084'
                            }
                          }
                        },
                        resources: []
                      },
                      _links: {
                        product: {
                          href:
                            'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                        }
                      }
                    }
                  ],
                  productResourceTimeSlotAvailabilities: []
                },
                _links: {
                  product: {
                    href:
                      'https://staging-open-api.myeasyloisirs.com/v1/products/3334'
                  }
                }
              }
            ]
          },
          _links: {
            last: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_time_slot_availabilities?page=1'
            },
            self: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_time_slot_availabilities?page=1'
            },
            first: {
              href:
                'https://staging-open-api.myeasyloisirs.com/v1/product_time_slot_availabilities?page=1'
            }
          },
          pageCount: 1,
          pageSize: 2,
          totalItems: 2,
          page: 1
        }),
      500
    )
  ).then(response => response._embedded.productTimeSlotAvailabilities);
}
