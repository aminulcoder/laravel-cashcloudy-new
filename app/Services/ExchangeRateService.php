<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ExchangeRateService
{
    protected $apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // বাস্তব API ব্যবহার করো

    public function getRate($fromCurrency, $toCurrency)
    {
        try {
            $response = Http::get($this->apiUrl);
            if ($response->successful()) {
                $data = $response->json();
                return $data['rates'][$toCurrency] ?? null;
            }
            return null;
        } catch (\Exception $e) {
            return null;
        }
    }
}
